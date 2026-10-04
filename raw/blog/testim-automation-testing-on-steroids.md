---
id: 1072127
title: "Testim - Automation testing on Steroids"
published_at: "2022-05-11T15:26:14Z"
tags: ["testing","webdev","tutorial","productivity"]
reading_time_minutes: 4
cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2yvezp44vbmzatcoa51h.png"
canonical_url: "https://medium.com/p/ee5eeeb3fa50"
devto_url: "https://dev.to/sameer1612/testim-automation-testing-on-steroids-4mc6"
---

Artwork by [Gaurav Singh](https://medium.com/u/27bc603427b?source=post_page-----ee5eeeb3fa50--------------------------------)

Testim is an AI-based testing framework that extends the concepts laid by traditional testing veterans like Selenium, Capybara, Jest, etc. Coming from a web development background, I understand the time and effort dedicated to writing and maintaining end-to-end tests. At times I saw engineers spending hours replicating user behavior through Selenium test scripts.

It was quite a simple interaction with UI elements in the browser, but writing test scripts using selectors was a different story, especially for someone from the development team. The biggest challenge that automated testing put in front of me as a developer was writing code for complicated navigations and UI interactions.

Last month, I started exploring solutions for the above problems and one day landed with [testim.io](https://testim.io). Testim not only automates the flow but also automates code generation for the test scripts. Let’s take a look together.

---------

## Getting Started
===============

Testim has an intuitive onboarding process, but let’s go through them once for this article.

*   Create an account on testim.io
*   Pass your website’s URL
*   Navigate to the test library
*   Create a new test or, for better organization, create it inside a folder there. Say, all login, sign-up, etc., will be in an auth folder.
*   Install Testim chrome extension
*   Start test recording
*   Stop after completing one flow
*   Organize and curate cards(test steps) from the dashboard
*   Run the test to validate the correctness
*   Add to your Continuous Integration(CI) tool, like the circle.ci

---------

## Time to get our hands dirty
===========================

Let’s go through each step with the help of some video clips and get a quick look at one of the many test approaches possible with Testim.

### Goal

Tarka Labs ([https://tarkalabs.com](https://tarkalabs.com/)) has a fantastic website, and we want to see if the contact form there is working because what’s a company site without a contact form!

Let’s get things moving now, starting with creating a test folder, say **“Contact.”**

![testim](https://miro.medium.com/max/1400/1*HCrSDgWwOh8bdE51_d4xdw.png)Testim test library

*   Hop into the Contact folder and use the same **\+ button** to create a test this time.

![testim](https://miro.medium.com/max/1400/1*Xv8-5tjg0ib6OhqpGu59cQ.png)New Testim test

*   Fill in basic details about the test; the main parameter here is the site URL.

{% embed https://youtu.be/vLNsw6i28fo %}

Create Testim test \[51 secs\]

*   Finally, now we are going to record the actual test. Use the option beside the first step to start the recording.

![testim](https://miro.medium.com/max/1400/1*FdIMFinP_JF0anlApRCk-Q.png)Testim test recording

*   Henceforth, the flow can vary from site to site. All we need to do is “Stop Recording” after the test sequence is complete.

{% embed https://youtu.be/gwo59BvgoF4 %}
Record Testim test \[1:13 min\]

*   After recording, it’s time to validate the efforts so far. We can run the test from the dashboard.

{% embed https://youtu.be/NH4TAZOYQFo %}
Run Testim test \[27 secs\]

*   Sometimes things are not testable by UI, or good old code is the better approach. In that case, users can make a test step out of a javascript function. Let’s say we want to test if, along with Web Development, other options are available on the page.

{% embed https://youtu.be/B_Vp8nYGp3A %}
Creating custom test on Testim.io using Javascript \[56 secs\]

---------

## Let’s reflect
=============

What we saw makes things simpler than ever but let’s not ignore the efforts it took to build such an awesome tool. Let’s get a glimpse of what’s happening behind the scenes. When Testim loads the test site, it roughly goes through these steps.

*   Testim puts some observers on the test site and monitors both our keyboard and mouse.
*   Testim remembers every element that we interact with through the concept of locator functions. It generates a locator JSON file for each element and later finds elements on the page using the same mapping.
*   Every user action on the page is translated into an atomic event. These events can be clicking, double-clicking, hovering, keypress, etc.
*   All those events are sent to the Testim dashboard in the form of test steps, referring to the cards we saw on the dashboard.
*   There are a plethora of options and validations that can be applied to screens when the particular event executes. Most importantly, check the presence of some item on the screen.
*   If something doesn’t fit in Testim’s default set of validations, drop a javascript function, and then things fly as you specifically want.
*   Once all tests are created and validated, we can link Testim with our CI system, say CircleCI, so that whenever it runs, all Testim steps are automatically executed in Testim’s cloud and, based on that, build passes.
*   If the cloud-based testing infrastructure is overwhelming, it also allows you to export code for your tests and run it conventionally through a Node.js testing setup.

Test script generated by Testim.
{% gist https://gist.github.com/sameer1612/0ce9ae0bded1935db3258cbca004c864 %}
---------

## Conclusion
==========

Well, we have unraveled some powerful magic today. I can say one thing for sure; such tools will make the lives of engineers a lot easier and happier. Throughput from the testing team will increase, the test we did in this article would have taken a minimum of 30 mins to write using traditional methods, but we got it ready to roll within 30 seconds, perhaps. Such a paradigm shift will bring a tad bit of operational and skill challenges but is definitely a move in the right direction.

![testim](https://miro.medium.com/max/1120/1*EETFYldAU_tRqCrVkm6rTg.jpeg)Already overflowing with power, eh!

---------

## To Connect
==========

🏭 LinkedIn: [https://www.linkedin.com/in/sameerkumar1612](https://www.linkedin.com/in/sameerkumar1612/)  
✍️ Follow on Medium: [https://sameer-kumar-1612.medium.com/](https://sameer-kumar-1612.medium.com/)