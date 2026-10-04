---
id: 1192028
title: "React 18: When to use “useImperativeHandle” and “forwardRefs”"
published_at: "2022-09-13T11:54:11Z"
tags: ["javascript","webdev","react","programming"]
reading_time_minutes: 3
cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fuhpn7ma5c0we3z5xtb66.png"
canonical_url: "https://betterprogramming.pub/when-to-use-useimperativehandle-and-forwardrefs-in-react-18-89cce42b3309"
devto_url: "https://dev.to/sameer1612/when-to-use-useimperativehandle-and-forwardrefs-in-react-18-3l1b"
---

> Sometimes, you have to take out the big guns

This article is a continuation of [https://betterprogramming.pub/react-v18-demystifying-useref-forwardref-and-useimperativehandle-feec2fc5b2f6](https://medium.com/react-v18-demystifying-useref-forwardref-and-useimperativehandle-feec2fc5b2f6) where we saw what refs are and how they operate. With the knowledge gained from the previous article, let’s dive into a little more complex understanding, which can come in handy in real-world projects with a lot of component nesting and a bit of real DOM-based needs.

Forward Ref
===========

What’s a solution without a problem, right? So, let’s define a situation where regular refs can not get the job done. What if we have a parent component that wants a reference to one of the elements defined in the child component and modifies the focus state? Let’s create such an example.

![](https://miro.medium.com/max/3954/1*eLWlolRaMn11RnnBbH642g.png)![](https://miro.medium.com/max/3920/1*_4mb7gSEAbJLPfX_mdTvhQ.png)The parent component controls the focus of the button defined in the child component.

As you can see above, the parent component controls the focus on the child component’s button. It is not as simple as passing the ref defined in the parent as a prop to the child. In our case, ref is a special property defined on the exact HTML element whose focus is to be changed, not the child component wrapper, as it’s just a function.

We can attain the desired behaviour by wrapping our child component into a `forwardRef` function provided by React, which will handle this delegation. This function should transfer the sent props and allows one extra prop on the component, that being our “ref.” Here’s the code:

{% embed https://gist.github.com/sameer1612/46ae998a0aa7097117184f384b2e319e %}

useImperativeHandle
===================

Well, seemingly, what we achieved in the previous section is enough for even complex situations. Still, at times you may be tempted to define a custom ref functionality inside your component, which will be exposed to components using it. Let’s try to create a situation where we need such fine-grained control.

By default, the focus colour on input is `blue` but let’s say if our ninja is supposed to get a supercritical jonin level mission, then the input field should focus on `red` instead.

![](https://miro.medium.com/max/6468/1*T0uOssF90_YeOKgDjfJrBg.png)![](https://miro.medium.com/max/6468/1*tMJLmQI44rvjHPCo89Vwvg.png)The parent component can control which colour the child’s input focuses on.

To illustrate the use of `useImperativeHandle` in this case, let’s divert from common sense and build two custom methods tied to the input component through ref. Instead of the default focus method, this time, we’ll have two custom methods `focusRed()` and `focusBlue()`.

We’ll still need to use `forwardRef` to pass on the ref to the child component, but inside the child component, we’ll create these new functions with the help of the `useImperativeHandle` hook. Here’s what the code looks like:

{% embed https://gist.github.com/sameer1612/d42a98a28e7aabc740bd79e3a08a69c7 %}

> One important thing to notice is that in the code above we are not extending the methods available by default as in previous case but creating totally a new set of methods. So, the `_default focus()_` method is no more available to us and calling it will give us sweet errors.

![](https://miro.medium.com/max/1400/1*91DtTO0n1C-kP-Jyh4ERhA.png)The focus method is not available when using the imperative handle.

Conclusion
==========

To sum up, I’ll repeat what I said in the previous article: Refs to DOM themselves should not be used when doing a virtual dom-based development because the changes you make in the real DOM don’t get properly transferred to the vDOM setup, and that leads to unexpected reactivity.

I chose `focus` as the central topic for this article just because it’s one of the main needs when refs need to be summoned. React mentions a limited set of use cases for refs, which you can see here: [https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs](https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs).

---

## Want To Connect?

LinkedIn: [https://www.linkedin.com/in/sameerkumar1612](https://www.linkedin.com/in/sameerkumar1612/)