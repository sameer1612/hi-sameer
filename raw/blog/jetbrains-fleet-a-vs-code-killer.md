---
id: 1223851
title: "JetBrains Fleet — A VS Code killer?"
published_at: "2022-10-19T07:41:15Z"
tags: ["javascript","programming","webdev","productivity"]
reading_time_minutes: 7
cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23wah7gruqz1qvl8ntvm.png"
canonical_url: "https://sameer-kumar-1612.medium.com/jetbrains-fleet-a-vs-code-killer-f662f45f6478"
devto_url: "https://dev.to/sameer1612/jetbrains-fleet-a-vs-code-killer-2odb"
---

> An excellent lightweight polyglot IDE from JetBrains.

JetBrains is pure love. It doesn’t matter which code editor you use but a few things are always of personal priority. For me, it’s aesthetics, speed, and intelligent suggestions. Extra point for aesthetics 💛.

I used to be a long-time Sublime Text fan. Then it faded into oblivion and I packed my bags and moved to VS code which has the above three in ascending order. Still, nothing beats my experience with JetBrains IDEs, especially RubyMine while I was working on ruby on rails development. The only thing that taints these gorgeous IDEs is the speed, primarily the time to get interactive.

> JetBrains’ answer to most of its problems is **Fleet**.

Fleet is targeted to be more of an intelligent editor than a full-blown IDE. And I consider this a good thing because most of the time we don’t want all those nuclear features packed inside the IDE to manipulate a few lines of code and get decent IntelliSense. When I installed fleet for the first time, I was a bit skeptical because I thought I’ll be losing all the good parts of IDE but after using it for a couple of days, I can say that all that power is not needed in day-to-day uses.

**Things I liked in fleet ❤️**
==============================

**Aesthetics**
--------------

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7bjd1gbsrarwg72np3e1.png)
JetBrains fleet editor

If you ask me one thing I don’t like about VS code, it will be the look and feel. It's no surprise that VS code can be customized to the very extremes using the plethora of extensions but still, it feels very plasticky to me. Earlier I thought it was just me, but when I asked a couple of my friends who are longtime users of JetBrains, they also seconded that JetBrains IDEs offer a more sturdy look and feel.

Fleet takes the old IDE inspiration and conveys it in a modern design language. The new design is extremely fluent and distraction-free. The application itself is divided into four panes.

1.  The first pane is on the left side and is divided into three tabs featuring a **file explorer, version control, and commit history**. Upon selecting the pane each of these three subsections can be easily navigated using keyboard shortcuts. The presentation and navigation felt buttery smooth and they just work.
2.  The second pane is at the bottom and can host different views, including terminal, run logs, docker, etc. which can be selected from the drop-down presented there. It’s totally up to us what we want to see, maybe in the future, there will be custom views as well.
3.  The third pane is on the right side and can contain the same views as the second one. It can be used as a secondary panel, but in most cases, I think I’m better without it still, it’s nice to have when screen real estate is not a limitation.
4.  Apart from these, the main editor area itself is quite a distraction-free, accessible, and clean-looking view. Looking at the customization side of things we can change the theme, font, and other common attributes. The application theme ties itself to the system theme pretty well and the defaults are well-designed.

**KeyMaps**
-----------

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mlb1m43qqaqflygwm9j5.png)
Fleet keymaps

> “Thou shall leave your editor but not thy keymaps”

Coming from a different editor, the biggest challenge is getting your muscle memory of keyboard shortcuts transferred but here almost half of the keyboard shortcuts were already aligning with VS Code, and it took me around 15 minutes to map other shortcuts as per my liking.

Being a keyboard-driven power user I find a lot of things missing from IDEs as well as VS Code. The very first thing I noticed was not being able to move to a tab by using command plus number keys but again we are just looking at the preview version and these things will be integrated when it comes to the real release or a plugin will tackle it.

Overall keyboard navigation was very responsive including the find files and actions part, even in a large-scale project containing thousands of files. But, then it's JetBrains, their whole core is dedicated to fueling enterprise codebases.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fd8jmz4juvhfytrim93s.png)
Fleet palette view.

**DX ( Development Experience )**
---------------------------------


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y4cny21p888fobqsnhak.png)
DX = Happy Developer

It can look and feel good, but at the same time, it can be a waste without solid development experience. Thankfully, it’s going on the right track here. It’s not the time to evaluate the finished product as it’s not finished yet, but we can get a clear direction in which things are going to move.

The editor managed to be a super fast experience by turning off IntelliSense by default, but it can be enabled with a simple click on the bolt in the top right.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/566db0r9rxknedvm7o1a.png)
The smart mode in the fleet editor.

It starts as nothing but a notepad, and on clicking the smart mode toggle it pulls in enough power to provide you with some good-quality intelligence for mid-weight development. We can do all those familiar things like jumping to the declaration, finding usage, global find using regex, etc. The visual presentation of content and mapping of controls is welcoming to both JetBrains and VS Code users.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jkogp109s2l1jr4sfdnx.png)
Cloud-enabled features in JetBrains fleet.

A more worthy feature in the fleet is its remote backend. Use the power of virtual machines in the cloud to build your app and run Fleet along with the IntelliJ code-processing engine. It solves the “_IntelliJ is too heavy to run on my tiny machine_” problem by pulling all the fancy stuff in the cloud and you have only the code local while keeping bulky intelligence features in the cloud.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ss19kan8vaklxprnpbt0.jpg)
Pros and **Cons** of JetBrains fleet editor.

Let’s take a break from our walk in the garden and be slapped in the face with a brick called reality. Although it is still in preview and the vision is not solidified yet but few things are crystal clear. I am listing two things below which in my humble opinion may not work in favor of the fleet vision.

Things that scare 😱
====================

Not a Free and Open Source Software ( FOSS )
--------------------------------------------

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/10h94dl192fiuiefbdr5.png)
Open source software.

It's not a surprise that JetBrains will keep the code closed as it did with all other products it built so far. But, the fleet is not on the same lines as creating highly specialized enterprise-grade software that sets benchmarks in the industry.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0siouizlyk0cjxkvnuz9.png)
Fleet extensions framework.

Jetbrains themselves can not make the Fleet a polyglot system and it will be in the product’s best interest to offload the work to the community which specializes in a particular language and framework. As of now, there is no extensions framework but it's in the pipeline before the final release.

But, even when it lands, a small dev community sitting behind a paywall can not make a rich ecosystem like vscode. We have seen other IDE products from JetBrains and the range of extensions is very low.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/46fjgpc7fgz6swoa4nvm.png)
> I don’t sing of charity here but if the competitor is offering everything for free, the motivation to switch gets automatically low.

Not as lightweight as it says on the label
------------------------------------------

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v9odoelyz6ywo6lmiep6.png)
JetBrains Fleet resource consumption.

JetBrains environment running this fast is never heard of. I was pleasantly surprised when I stressed it with big codebases and everything worked with the same fluency. Then I looked into the system resource consumption and it wasn't much to be proud of. Have a look yourself.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kawz8va64swtsfnk962m.png)
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rhx3o6eko1kyf4xjwkb3.png)
JetBrains Fleet vs VS Code performance benchmarks.

For context, I have the same mid-size angular application running in both editors with just two files open and the server running in the integrated terminal.

As promised Fleet and its backend are running separately. But, the memory consumption is too high for it. To add to it I have at least 30 extensions added in the VS Code and the Fleet is fresh out of the box.

I have a beefy MacBook M1 Pro with higher specs than an average user. So, I can not justify that someone on a weaker machine will get the same speedy performance despite such resource usage.

Conclusion
==========

Now that we have seen both sides with equal enthusiasm, it will be good to summarise this review with a non-opinionated summary. I must say, the fleet is what I was wanting for years but for others, it might be yet another shiny object. JetBrains has an IDE for almost every language and Fleet is an attempt to move in the polyglot direction. Since both of these are targetting different communities, it’s tempting to put them in the category of android vs apple comparison. On one side you are getting something extremely versatile and flexible but on the other side, you get a very refined and polished product best suited for the existing ecosystem users.


## 🤝 Want To Connect?
LinkedIn: [https://www.linkedin.com/in/sameerkumar1612](https://www.linkedin.com/in/sameerkumar1612/)