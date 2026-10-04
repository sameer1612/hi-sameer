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

```
Account table structure: class _CreateAccounts_ < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |_t_|
      _t_.string :first_name
      _t_.string :last_name
      _t_.string :status

      _t_.timestamps
    end
  end
end
```

Account model:

```
_# frozen_string_literal: true

_class _Account_ < ApplicationRecord
  validates_inclusion_of :status, in: %w[created active inactive deleted]
  validates_inclusion_of :origin, in: %w[email facebook google twitter]
end
```

Now we try to do something based on our Account model, Lets say for an account which is inactive and came from email origin, send an email.

```
if @account.status == 'inactive' && @account.origin == 'email'
  p 'Sending an email.'
  _#  do something
_end
```

This of course works well, at this point in your career you won’t be writing something that doesn’t work but we want to take our game to next level. One possible way is to use boolean methods like:

```
class _Account_ < ApplicationRecord
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

```
if @account.inactive? && @account.email_orgin?
  puts 'Sending an email...'
  _#  do something
_end
```

Taking it to an ultra pro max level we can substitute it with enums this time. Enums are representation of strings in form of integers. We’ll look into structure soon but lets start with a small migration to represent it:

```
class AddStatusToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :status, :integer
  end
end
```

New account model:

```
class _Account_ < ApplicationRecord
  enum status: [:created, :active, :inactive, :cancelled]
  enum managed_by: [:admin, :user], _prefix: true
  enum origin: [:email, :facebook, :google, :twitter], _suffix: true
end
```

Alternatively and better way is to use hash for index consistency: 
```
class Account < ApplicationRecord
  enum status: {created: 0, active: 3, inactive: 1, cancelled: 3}
  enum managed_by: [admin: 0, user: 1], _prefix: true
  enum origin: [email: 0, facebook: 1, google: 3], _suffix: true
end
```

> Here these values like email, Facebook, google, twitter, etc are available to rails but in database it is stored as 0, 1, 2, 3 respectively. Kinda intuitive already!

Typically you can use it similarly as a normal value, just like:

```
if @account.status == :active
  puts 'Account is active'
end
```

BUT, We didn’t come all this way to do same thing as we could have done in our first attempt. ActiveRecord’s secret love for enum comes in light when we see its built in methods for enums.

As you can infer from these examples, in this case since we have not specified any modifiers, so it is being used as a direct method on model. Like:

```
@account.created?
@account.active?
@account.inactive?
@account.cancelled?
```

With prefix option:

```
@account.managed_by_admin?
@account.managed_by_user?
```

With suffix option:

```
@account.email_origin?
@account.facebook_origin?
@account.google_origin?
@account.twitter_origin?
```

Apart from these object level magic, we have some at class/scope level as well:

```
Account.active
Account.managed_by_admin
Account.email_origin
```

Let whole reading stuff aside, we can write value even more elegantly \[Validations included\]:

```
@account.inactive!  # @account.update(status: :inactive)
@account.managed_by_user! # @account.update(managed_by: :inactive)
@account.google_origin! # @account.update(orgin: :google)
```

![](./assets/image-01.webp)Photo by [Ben White](https://unsplash.com/@benwhitephotography?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

That was all on fundamentals of Enums on Rails. Well I think, now you have a smile on your face, hence, one on mine. Stay tuned. We’ll catchup again next week to discuss something amazing!

Do follow for more [Ruby on Rails](https://railsfactory.com/hire-ruby-on-rails-developer) posts.

## To Connect
==========

🏠 Website: [https://hi-sameer.web.app](https://hi-sameer.web.app/)
🏭 LinkedIn: [https://www.linkedin.com/in/sameerkumar1612/](https://www.linkedin.com/in/sameerkumar1612/)
