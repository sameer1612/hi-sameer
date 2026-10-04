---
id: 1148742
title: "React v18: useRef — What, When and Why?"
published_at: "2022-07-22T12:05:34Z"
tags: ["javascript","webdev","react","programming"]
reading_time_minutes: 5
cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmyf7nq09halg0ek9rnaq.png"
canonical_url: "https://betterprogramming.pub/react-v18-demystifying-useref-forwardref-and-useimperativehandle-feec2fc5b2f6"
devto_url: "https://dev.to/sameer1612/react-v18-useref-what-when-and-why-m0l"
---

Part 1: Taming React’s necessary evil — **useRef**
--------------------------------------------------

The concept of values and references is not new to any programmer. Values are what the name suggests, simple snapshots of data at a point in time. To jog your memory for the latter, references are pointers to some data which may change over time, but the reference itself remains the same. Think of it as a house’s address; the address always remains the same, although the house may renovate to a new one over time.

React highly recommends thinking in terms of UI = function(state). This simplification can handle maybe 99% of what we were used to doing with the traditional DOM-based paradigm, but the final 1% needed some plumbing.

The React team left an escape hatch for such situations in the form of the refs. IMHO, refs are a necessary evil that helps us take the liberty of solving problems for which React itself can’t provide solutions due to its data-driven design philosophy.

Since refs can get pretty complex to understand. We’ll cover three areas mentioned in the title separately. For part 1, we’ll understand what React references are and how to use the most fundamental useRef hook. In the upcoming part, we’ll cover more complex examples and use cases.

---

## useRef
==========

Starting with the most basic implementation using the `useRef` hook provided by React. Let’s think of a situation that doesn’t need fancy DOM latches but a simple number to reference outside React’s state system. Our application is going to be a super simple counter app.

{% gist https://gist.github.com/sameer1612/ef35f8396d720fbd62135af8b2fe5844 %}
![Component re-renders when updating the data contained in the React state.](https://miro.medium.com/max/1400/1*tuuGb7QC2TVEXNwe4tDEHw.png)

> Component re-renders when updating the data contained in the React state.

It’s no rocket science to infer from the console logs that our component is rendering again for every change in the num value, which may be a nightmare come true in a complex production application.

---

Let’s try bringing in the ref to the picture and see how it performs. We will bring a number here which should not change between re-renders, and also, it should not cause a rerender if its value changes.

{% gist https://gist.github.com/sameer1612/1cee03bc1e15972b3ab9f00d8490d9a5 %}
![React refs persist data across component rerenders and don’t cause rerenders when updated.](https://miro.medium.com/max/1400/1*A5o_zRUjKGA94SuvuXkTmQ.png)
> React refs persist data across component re-renders and don’t cause re-renders when updated.

As we can see from this example, our application can retain the random value stored in the ref variable even if the component is rerendering due to clicks on the increment button. The key takeaway from this experiment is that the referenced value is independent of the component lifecycle here.

---

Let’s go for a more practical example where you will see refs being used in real applications. In this case, we have an HTML input element, for which we want to see if it’s blank. If yes, then we put some random value there.

React believes in the unidirectional controlled component strategy, which says inputs should be tied to some state, and what we see in the input should only be generated through a change in the linked state. In our case, we will not have any state linked to it. We also don’t want to go ballistic by putting an `id` and starting with a `document.getElementById` like the old school way.

What we can do is use a ref as a pointer to this DOM element and control its value from within React. Let’s take a look at the following code:

{% gist https://gist.github.com/sameer1612/2007aee77065eab339cc3668c9431bb3 %}
![Refs help us to hook to any DOM element on page and interact with them outside react’s official way.](https://miro.medium.com/max/1400/1*4jtCtuKToWhBA4jspdu-ug.png)
> Refs help us to control any DOM element on the page and interact with it outside the React way.

From the above demo, we can see that the input is populated the first time itself, and that too without accessing the real DOM API directly. Our `inputRef` is serving as a pointer to the input DOM element, using which we can manage its properties directly, bypassing the React’s state system.

---

Managing form using refs is often discouraged as it kills the whole reason behind using a state-driven library like React.

Let’s look at something which is more suiting for the use of React refs. Imagine we loaded a form, and we want to automatically move focus to an input field for achieving UX brownie points. We can take the above application, for example, and use refs to focus the input field on load. This can be a welcoming feature that forms loads, and you know what to begin with. In the golden era, this could also open your mobile keyboard, but it is now blocked due to security and user preferences.

{% gist https://gist.github.com/sameer1612/430edfa97cc628379bcbb0cdced6cb7a %}
![Focus input field using react refs.](https://miro.medium.com/max/1400/1*edJOV8FJjC9zS34N3rEuBg.png)
> Focus input field using React refs.

---

## The Dark Side
=============

If something this powerful is presented to programmers, how could they not abuse it? But, just because we have a ton of parachutes, it doesn't mean every day is a skydiving day. Refs are meant to be used in cases that need direct dom, such as our above example. The first counterexample is also something that can be handled with caching using the `useMemo` hook.

React warned us from starting against accessing DOM directly in a virtual DOM system. The biggest concern is predictability. The uni-directional data model in React will not respond if something directly changes the DOM element without properly notifying React.

In our case, if we make a small timeout trigger that will change the data directly, we will lose the notification to the other component we defined for a controlled change. We can see the message in the lower paragraph tag has not been updated after the ref changed the value.

![Value updated directly by using ref in a 2-second timeout broke our application.](https://miro.medium.com/max/5980/1*JnOysx6wAx5wxwVEWM25_Q.png)![Value updated directly by using ref in a 2-second timeout broke our application.](https://miro.medium.com/max/5980/1*OGuCqKG1qmE3NL4TNKwE2w.png)Value updated directly by using ref in a 2-second timeout broke our application.

---

## Conclusion
==========

We have gone through enough examples to understand how refs can help us and what we should look out for. In the next part, we will look into some more complex use cases which may come in handy for a bigger application that needs cross-component communication and passing refs to other components.

---

## Want To Connect?
LinkedIn: [https://www.linkedin.com/in/sameerkumar1612](https://www.linkedin.com/in/sameerkumar1612/)