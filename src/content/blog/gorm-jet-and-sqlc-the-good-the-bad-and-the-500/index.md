---
title: "GORM, Jet and sqlc — The Good, the Bad and the 500"
date: 2026-11-13
summary: "I built a tiny food-photo API in Go with sqlc. Then I rewrote its data layer with go-jet. Then again with GORM. Same five endpoints, three very different opinions on where SQL should live, and one sneaky bug I’m not proud of."
description: "Building the same Go CRUD API with sqlc, go-jet and GORM: where the SQL lives, how nulls and not-found errors behave, and which one I kept."
tags: ["go", "databases", "backend", "learning"]
readingTime: 9
cover: "./assets/cover.webp"
---

Confession time. I come from Rails, Node and Django land. Over there, nobody asks which database library you want. Rails hands you ActiveRecord, Django hands you its ORM, and you go back to arguing about tabs vs spaces.

Go doesn’t hand you anything. It gives you `database/sql`, a shrug, and a reading list.

> Disclaimer: This is not a benchmark. Nobody was load-tested in the making of this article. It’s one developer, one table and a lot of opinions, so take it with a pinch of oregano. 🍕

So, while learning Go properly (the “I’ll stop copy-pasting from Stack Overflow” kind of properly), I built **Yummy**: a photo grid of food. Upload a photo, give it a name, a caption and a rating out of 5. Five endpoints, one table, an Angular frontend. Small enough to finish, real enough to hurt.

And then I did what every developer does with a perfectly working app. I broke it on purpose. Twice.

- [`main`](https://github.com/sameer1612/yummy) uses **sqlc**
- the [`jet`](https://github.com/sameer1612/yummy/tree/jet) branch uses **go-jet**
- the [`gorm`](https://github.com/sameer1612/yummy/tree/gorm) branch uses **GORM**

Same Gin handlers, same Postgres, same table. Only the data layer changes. The code is all on GitHub at [sameer1612/yummy](https://github.com/sameer1612/yummy) if you want to poke at it, or judge me. Both are welcome.

## The table everyone fights over

Here’s the poor table that went through all of this:

```sql
create table food_items (
  id serial primary key,
  name text not null,
  caption text not null,
  rating float8 check (rating >= 0 and rating <= 5),
  photo_path text not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
);
```

Look at `rating`. It’s the one nullable column that matters: a pizza nobody has rated yet. Sounds innocent, right? Every library here has a strong opinion about it. Keep an eye on this little guy.

## Round 1: sqlc, SQL first

sqlc flips the whole ORM idea on its head. You write plain old SQL, sprinkle a magic comment on top, and it writes the Go for you. The robot does the boring part. As it should.

```sql
-- name: CreateFoodItem :one
INSERT INTO food_items (name, caption, rating, photo_path)
VALUES ($1, $2, $3, $4)
RETURNING *;
```

Run `sqlc generate`, and out pops a params struct and a method:

```go
food, err := queries.CreateFoodItem(ctx, db.CreateFoodItemParams{
	Name:      "Pizza",
	Caption:   "Delicious cheese pizza",
	Rating:    sql.NullFloat64{Float64: 4.5, Valid: true},
	PhotoPath: "uploads/images/pizza.png",
})
```

### The good stuff

- **The SQL is the SQL.** No guessing what query actually ran. You wrote it, you own it. `RETURNING *` hands the row back in one round trip, for create, update _and_ delete. +10 points.
- **Typos die early.** Misspell a column, and sqlc refuses to generate before Go even gets a say.
- **No runtime magic.** The generated code is boring `QueryRowContext` and `Scan`. Boring is good. Boring doesn’t page you at 3 AM.

### The not-so-good stuff

Remember our little `rating` guy? sqlc turns him into `sql.NullFloat64`. JSON, on the other hand, wants a `*float64`. They don’t talk to each other. So I played marriage counsellor, wrote a tiny helper pair, and called it from literally every handler:

```go
func ToFloat64(n sql.NullFloat64) *float64 {
	if n.Valid {
		return &n.Float64
	}
	return nil
}
```

Not hard. Just one more bag to carry around everywhere.

The other thing: sqlc needs to know your schema. I pointed it at my migration file, which I run by hand with `psql` like a caveman. It works. But now the schema lives in a file, and the actual database is free to quietly disagree with it. Who wins that argument? Nobody. You find out in production.

## Round 2: go-jet, Go first

go-jet goes the other way round. It connects to your **live database**, looks around, and generates Go types for every table and column. Then you write SQL… in Go:

```go
err := tbl.INSERT(tbl.Name, tbl.Caption, tbl.Rating, tbl.PhotoPath).
	MODEL(model.FoodItems{Name: name, Caption: caption, Rating: rating, PhotoPath: photoPath}).
	RETURNING(tbl.AllColumns).
	Query(r.db, &result)
```

Yes, those are capital letters. Yes, it looks like your code is yelling at you. No, it doesn’t stop. You get used to it, like the neighbour’s dog.

### The good stuff

- **Pointers for nulls.** The generated model has `Rating *float64`. My lovely `nullable` helpers became dead code on day one. RIP, little guys.
- **Schema straight from the database.** Jet reads Postgres itself, so the migration file and the sqlc config both went in the bin. This is exactly what I’d been wishing sqlc did. In a shop where several apps share one database, the database is the truth, not whichever app’s migrations folder shouts the loudest.
- **Queries you can build.** Need an optional `WHERE`? It’s just Go, add an `if`. With sqlc, dynamic queries mean either several queries or some _very_ creative SQL.

### And then it bit me

My handlers checked for a missing row the way sqlc had taught me:

```go
if err == sql.ErrNoRows {
	c.JSON(404, gin.H{"error": "not found"})
}
```

Jet doesn’t return `sql.ErrNoRows`. It returns its own `qrm.ErrNoRows`. So on the `jet` branch, asking for a pizza that doesn’t exist gets you a shiny **500**, not a 404. Everything compiles. The happy path works. You only find out when someone asks for food ID 9999 and your server throws a tantrum.

> Lesson learnt: when you swap a data layer, its errors are part of its API too. Grep for every sentinel error you compare against. And use `errors.Is`, not `==`. Always. Tattoo it somewhere.

## Round 3: GORM, the comfort food

GORM is the one that felt like home. Write a plain struct, and the library figures out the rest:

```go
type FoodItem struct {
	ID        int32 `gorm:"primaryKey"`
	Name      string
	Caption   string
	Rating    *float64
	PhotoPath string
}

result := r.db.Order("created_at").Find(&items)
```

No codegen step. No SQL file. `FoodItem` magically becomes `food_items`, just like Rails pluralises your table names behind your back. My Rails heart did a little happy dance. 💃

### The good stuff

- **Least code to get going.** One struct, `gorm.Open`, done. Go home early.
- **Pointers for nulls**, same as jet.
- **A real not-found error.** `First` returns `gorm.ErrRecordNotFound`, you check it with `errors.Is`, and a missing pizza is a proper 404. As god intended.

### The not-so-good stuff

- **Two queries where one would do.** Update is “find it, change the fields, `Save`.” Delete is “find it, then delete it.” sqlc and jet each did these in a single statement with `RETURNING`. For Yummy, who cares. On a busy table, you’d care. A lot.
- **The SQL is hidden.** `Order("created_at")` is just a string. Misspell it, and you find out at runtime. sqlc would’ve yelled at generate time, and jet wouldn’t even let me type it.
- **`Save` writes every field.** Handy today. Surprising later, when someone adds a column and an old update quietly overwrites it. Fun times.

## Side by side

If you skipped straight here, I see you. Here’s the whole thing in one table:

|                       | sqlc                    | go-jet                     | GORM                       |
| --------------------- | ----------------------- | -------------------------- | -------------------------- |
| You write             | SQL                     | SQL-shaped Go              | Go structs and method calls |
| Schema comes from     | your migration files    | the live database          | your structs               |
| Nullable rating       | `sql.NullFloat64`       | `*float64`                 | `*float64`                 |
| Not found             | `sql.ErrNoRows`         | `qrm.ErrNoRows`            | `gorm.ErrRecordNotFound`   |
| Update / delete       | one query (`RETURNING`) | one query (`RETURNING`)    | read, then write           |
| Mistakes caught at    | generate time           | compile time               | runtime                    |
| Dynamic queries       | awkward                 | natural                    | natural                    |

## The repository pattern snuck in

One more thing changed in both rewrites, and it had nothing to do with the libraries. With sqlc, my handlers called the generated `*db.Queries` directly. Lazy? Maybe. Fast? Definitely. For jet and GORM, I put a small interface in between:

```go
type FoodRepository interface {
	List() ([]FoodItem, error)
	GetByID(id int32) (FoodItem, error)
	Create(name, caption, photoPath string, rating *float64) (FoodItem, error)
	Update(id int32, name, caption, photoPath string, rating *float64) (FoodItem, error)
	Delete(id int32) (FoodItem, error)
}
```

Swapping libraries a second time made the case for it all by itself. The handlers barely changed between jet and GORM, apart from that cursed not-found check. (In hindsight, those methods should also take a `context.Context`, like the sqlc ones did, so a cancelled request cancels its query too. Next time. Promise.)

## Which one stayed?

`main` still runs on **sqlc**. The other two live on their branches, like ex-roommates who still get the occasional letter.

My honest take after writing the same five endpoints three times:

- **sqlc** if you like SQL and want your database to be boring. The most explicit of the three, and the easiest to debug.
- **go-jet** if your queries are dynamic, or your schema belongs to the database rather than to your app. The type safety is lovely. Just learn its errors.
- **GORM** if you want ActiveRecord comfort and your queries are simple. The fastest start, at the price of SQL you can’t see.

## FAQs

1. So, which one is the best?\
   — The one your team will actually read. Next question.
2. Is GORM slow?\
   — For a pizza photo app? No. For a busy table doing read-then-write everywhere? Measure it before you blame it.
3. Why not just use `database/sql` directly?\
   — You can. Then you’ll slowly write your own tiny sqlc by hand, one `Scan` at a time.

## So, what did I learn?

- **Go makes you choose, and that’s the point.** Each library is a different answer to “where should SQL live?”
- **Nulls are a design decision.** `sql.NullFloat64` versus `*float64` decided how much glue code I wrote.
- **A data layer’s errors are part of its contract.** The jet 404 bug compiled fine, passed the happy path, and was still wrong.
- **Build the same small thing more than once.** One table and five endpoints taught me more about these libraries than any comparison post could. Including this one, lol.

Want to see the 500 for yourself? Clone [the repo](https://github.com/sameer1612/yummy), check out the `jet` branch, and ask for pizza number 9999. Then switch to `gorm` and watch it become a polite 404.

That’s all, folks. Now go build something small, and then break it. Twice. 😇
