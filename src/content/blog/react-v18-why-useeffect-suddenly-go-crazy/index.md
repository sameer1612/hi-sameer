---
title: "React v18: Why useEffect suddenly go crazy?"
date: 2022-05-22
summary: "React version 18 has brought some very appreciable changes to the core. One such bittersweet change is in for form of the mount -> unmount -> remount pattern of loading components in strict mode."
tags: ["javascript","react","webdev","programming"]
readingTime: 3
cover: "./assets/cover.webp"
originalUrl: "https://sameer-kumar-1612.medium.com/react-v18-why-useeffect-suddenly-go-crazy-db1b42eb2730"
---

**R**eact version 18 has brought some very appreciable changes to the core. One such bittersweet change is in for form of the mount -> unmount -> remount pattern of loading components in strict mode. If you have not tasted this first hand, be prepared because at first glance it seems some sort of dark magic on your happily working application. Let’s dive.

Problem
-------

Let’s take this fairly simple code for example. Judging by the empty dependency array in useEffect, we can expect “App Loaded” to be printed once in our console and be done with it.

> If you are confused with the use of this  [**console.count**](https://medium.com/console-log-and-his-ninja-pals-4fc0863ad5f4) method, do read here: [Awesome console methods](https://medium.com/console-log-and-his-ninja-pals-4fc0863ad5f4).

![useEffect hook in react.](./assets/image-01.webp)

Surprisingly, we are seeing this message being printed twice. That raises the question, are we doing something wrong or is react drunk today?

![Double console log in react useEffect.](./assets/image-02.webp)

Background
----------

To understand this whole mess let’s discuss first the concept of pure functions and idempotence. The following illustration is self-explanatory and we can see that under the same conditions, a function should produce the same output. Whereas, idempotence means that even if a function runs multiple times, the outcome should be the same.

![Idempotence in pure functions.](./assets/image-03.webp)

Well, you must be wondering what it has to do with our problem in hand with react. Take a practical example, we intend to subscribe to a stream of notifications coming from a certain server and we keep it in useEffect expecting it to subscribe ONCE the user opens our website, using the empty dependency array for the purpose. But, as established in our little demo, code written in useEffect ran twice and hence will our subscription. Possible outcomes can be:

*   We are showing two or more notifications, depending on the number of times our component is rendered. _\[Application level pure behaviour is no more present, sometimes showing 1 notification, sometimes 83.\]_
*   Our subscription server may throw an error that, “You are already subscribed”. _\[Idempotence cries in the corner.\]_

Solution
--------

Enough mathematics for the day, let’s look into the fix. “The fix” is essentially sticking to the best practices. I found many online resources, suggesting custom hooks to replace useEffect hacked with using ref and whatnot. Frameworks tend to make our life easier by abstracting decisions and we launch full-scale battles for finding ways to sneak out. Effect always provides a cleanup function which should be used to clean the work done during the effect run. It can be used to do the unsubscription in our hypothetical example. Looking at our previous example, it should be like this:

![useEffect with cleanup function.](./assets/image-04.webp)
![Correct use of useEffect hook.](./assets/image-05.webp)

Conclusion
----------

The react team decided to bring strict mode to these hooks for establishing best programming practices during the development phase. As in the case of our useEffect, this double mount saves us from many unseen issues that can come into the production later as we saw in our subscription example. Also, take note that React doesn't do this **mount — unmount — mount** cycle in an actual production build, it’s a dev mode feature provided by using the [**StrictMode**](https://reactjs.org/docs/strict-mode.html) tag in the index.tsx for the sole purpose of imposing best practices.

![StrictMode in react.](./assets/image-06.webp)[StrictMode in react.](https://reactjs.org/docs/strict-mode.html)

To Connect
----------

🏭 LinkedIn: [https://www.linkedin.com/in/sameerkumar1612](https://www.linkedin.com/in/sameerkumar1612/)  
✍️ Medium: [https://sameer-kumar-1612.medium.com](https://medium.com/)  
✍️ Dev.to: [https://dev.to/sameer1612](https://dev.to/sameer1612)
