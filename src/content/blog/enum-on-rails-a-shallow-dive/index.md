---
title: "Enum on Rails — A shallow dive 💎"
date: 2022-01-02
summary: "After so long, active again. Let’s have a look at beloved ActiveRecord this time. It packs up too much to be covered in simple glance, one such feature is interpretation of enums in rails. Enums are nothing more than an array technically in other languages but here its high on steroids."
tags: ["rails","beginners","programming","tutorial"]
readingTime: 3
cover: "./assets/cover.webp"
originalUrl: "https://dev.to/sameer1612/enum-on-rails-a-shallow-dive-e4m"
---

After so long, active again. Let’s have a look at beloved **ActiveRecord** this time. It packs up too much to be covered in simple glance, one such feature is interpretation of enums in rails. **Enums** are nothing more than an array technically in other languages but here its high on steroids. Lets try to clean a mess with help of enums.

As always lets create a hypothetical problem first so that we can pretend to solve and learn something from it. Our application has a table for **accounts** and we have implemented something like below to manage it. <Dirty code alert!>

Account table structure:

```ruby
class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |t|
      t.string :first_name
      t.string :last_name
      t.string :status

      t.timestamps
    end
  end
end
```

Account model:

```ruby
# frozen_string_literal: true

class Account < ApplicationRecord
  validates_inclusion_of :status, in: %w[created active inactive deleted]
  validates_inclusion_of :origin, in: %w[email facebook google twitter]
end
```

Now we try to do something based on our Account model, Lets say for an account which is inactive and came from email origin, send an email.

```ruby
if @account.status == 'inactive' && @account.origin == 'email'
  p 'Sending an email.'
  #  do something
end
```

This of course works well, at this point in your career you won’t be writing something that doesn’t work but we want to take our game to next level. One possible way is to use boolean methods like:

```ruby
class Account < ApplicationRecord
  validates_inclusion_of :status, in: %w[created active inactive deleted]
  validates_inclusion_of :origin, in: %w[email facebook google twitter]

  def inactive?
    status == 'inactive'
  end

  def email_orgin?
    status == 'email'
  end
end
```

Then it looks a bit more cleaner:

```ruby
if @account.inactive? && @account.email_orgin?
  puts 'Sending an email...'
  #  do something
end
```

Taking it to an ultra pro max level we can substitute it with enums this time. Enums are representation of strings in form of integers. We’ll look into structure soon but lets start with a small migration to represent it:

```ruby
class AddStatusToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :status, :integer
  end
end
```

New account model:

```ruby
class Account < ApplicationRecord
  enum status: [:created, :active, :inactive, :cancelled]
  enum managed_by: [:admin, :user], _prefix: true
  enum origin: [:email, :facebook, :google, :twitter], _suffix: true
end
```

Alternatively and better way is to use hash for index consistency:

```ruby
class Account < ApplicationRecord
  enum status: {created: 0, active: 3, inactive: 1, cancelled: 3}
  enum managed_by: [admin: 0, user: 1], _prefix: true
  enum origin: [email: 0, facebook: 1, google: 3], _suffix: true
end
```

> Here these values like email, Facebook, google, twitter, etc are available to rails but in database it is stored as 0, 1, 2, 3 respectively. Kinda intuitive already!

Typically you can use it similarly as a normal value, just like:

```ruby
if @account.status == :active
  puts 'Account is active'
end
```

BUT, We didn’t come all this way to do same thing as we could have done in our first attempt. ActiveRecord’s secret love for enum comes in light when we see its built in methods for enums.

As you can infer from these examples, in this case since we have not specified any modifiers, so it is being used as a direct method on model. Like:

```ruby
@account.created?
@account.active?
@account.inactive?
@account.cancelled?
```

With prefix option:

```ruby
@account.managed_by_admin?
@account.managed_by_user?
```

With suffix option:

```ruby
@account.email_origin?
@account.facebook_origin?
@account.google_origin?
@account.twitter_origin?
```

Apart from these object level magic, we have some at class/scope level as well:

```ruby
Account.active
Account.managed_by_admin
Account.email_origin
```

Let whole reading stuff aside, we can write value even more elegantly [Validations included]:

```ruby
@account.inactive!  # @account.update(status: :inactive)
@account.managed_by_user! # @account.update(managed_by: :inactive)
@account.google_origin! # @account.update(orgin: :google)
```

![Laughing child holding an open book on a wooden bench](./assets/image-01.webp)
_Photo by [Ben White](https://unsplash.com/@benwhitephotography?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)_

That was all on fundamentals of Enums on Rails. Well I think, now you have a smile on your face, hence, one on mine. Stay tuned. We’ll catchup again next week to discuss something amazing!