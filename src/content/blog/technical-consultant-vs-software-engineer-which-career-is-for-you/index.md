---
title: "Technical Consultant vs Software Engineer. Which career is for you?"
date: 2022-03-20
summary: "Although these two titles are used interchangeably, their whole workflow and the role in a project are complementary. For the past month, I interviewed with a good number of firms for an independent and full-time consultant role. My experiences were quite wholesome and I decided to pen down this article to share them."
tags: ["webdev","programming","discuss","career"]
readingTime: 3
cover: "./assets/cover.webp"
originalUrl: "https://dev.to/sameer1612/technical-consultant-vs-software-engineer-which-career-is-for-you-1iph"
---

Although these two titles are used interchangeably, their whole workflow and the role in a project are complementary. For the past month, I interviewed with a good number of firms for an independent and full-time consultant role. My experiences were quite wholesome and I decided to pen down this article to share them. Despite both being responsible for the technical development of a product, they attend to requirements at different stages of a project aiming at different deliverables.

## Hypothetical Problem Time

Let's look into a day walking in both shoes. We’ll try to get an idea of how each of them executes their day to day work considering they work on the same project, say a Quality Reporting dashboard, where some auditors visit factories and report their findings of all processes going on there.

### Technical Consultant

![Technical Consultant](./assets/image-01.webp)

- Hit a couple of cappuccinos.
- Discuss UX feedback report from a customer survey conducted last month with client/product owners.
- 20% of auditors reported that in factories network conditions are bad and they can not fill reports in real-time. They have to make a note on paper and type it up on the website after the visit again in the right format.
- The client see this redundancy as a problem and reached out to me to **“Find a solution”**.
- We did a lot of digging the whole day, weighed the pros and cons of every possible solution.
- After 2 days and 20 coffees, I presented them with the idea of an assisting PWA(Progressive Web App). It can be installed locally and they don’t need an internet connection to open the actual website.
- I worked on a POC demo for the next 1 week and came up with a dummy 5 field report form mounted on a PWA with few validations and business logic enabled. Here, you can write a report even offline along with photos from the phone camera and once you regain connection it will sync to the main database.
- I started to do cost, feasibility and maintainability analysis with the business admins after the successful demo and assisted in validating the final proposal.
- Once the timeline was approved, I started coordinating with the development lead on the implementation plan for this feature.
- The loop starts with the dev and qa teams until the final work is done, ensuring the vision for **the solution** never gets diverted.

### Senior Software Engineer

![Software engineer](./assets/image-02.webp)

- Hit 3 straight espressos without sugar.
- I sit in a meeting with the above consultant and discuss the feature along with the end goals.
- Since I have a better ground report, I informed him about the complexity of implementing the feature in this website and suggested adjusting some overheads in the timeline for training one developer in PWA specifics for a couple of weeks.
- I also studied the plan till 3 AM and found a couple of other technical hurdles wrt to the implementation in this specific project.
- After everything was addressed, I started looking into the libraries and integrations we’ll need for this feature and selected the best toolchain for the job.
- I divided this work into 3 sprints, each having 15 days and put atomic deliverables in each avoiding any cyclic dependencies.
- After distributing work among dev team members, code commits started popping up and now I spend most of my time ensuring best practices are followed and the feature codebase is scalable and bugs are not branded as features. Now and then, I also spend a couple of hours coding some critical parts of this feature myself.
- After every sprint, I and my consultant friend sit together and discuss what we achieved and the alignment of ongoing work with the proposed solution.

## Conclusion

The above case study would have given you a practical and first-person look into what work each of those roles does and in the project lifecycle where they are most active in. A consultant is more in touch with the business, whereas engineers tend to incline towards the product. The general rule of thumb as per me will be:

- Choose Consultant line if you have/aim for diverse technical and practical knowledge. It allows you to decide what’s best for the business, unchained from a particular technology.
- Go for a Software development role if you love converting a solution on paper into a robust and clear codebase. It requires more in-depth knowledge of the specific technologies and know-how.
