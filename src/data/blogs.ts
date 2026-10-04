export type BlogPost = {
  title: string;
  /** Where the post was first published (Medium, Better Programming, dev.to, ...). */
  url: string;
  /** ISO publish date. */
  date: string;
  /** Minutes. */
  readingTime: number;
  cover: string | null;
  summary: string;
};

// Newest first.
export const blogs: BlogPost[] = [
  {
    title: '🔮 Functional Programming for Humans — Foundations',
    url: 'https://medium.com/@sameer-kumar-1612/functional-programming-for-humans-foundations-861bd9b40718',
    date: '2024-07-29',
    readingTime: 6,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhdgupg69m074iur9oa4p.jpeg',
    summary:
      'Functional programming (FP) is like the cool, rebellious middle child of the programming (language) family. Instead of following the traditional imperative way of doing things step-by-step, FP focuses on creating clean, predictable code by treating functions as first-class citizens.',
  },
  {
    title: 'PostGraphile — The Gateway Drug To GraphQL',
    url: 'https://betterprogramming.pub/postgraphile-the-gateway-drug-to-graphql-c6b335cd2bda',
    date: '2023-11-03',
    readingTime: 10,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fo7ez7r7w7n7i8m5m7hk9.jpeg',
    summary:
      'Postgraphile is the quickest way to scaffold a fully functional GraphQL CRUD API for your application without touching a line of code, (well that’s a lie but let it pass for dramatic effect). This article will expose you to the basics of what GraphQL is and how can we create an api quickly with postgraphile.',
  },
  {
    title: 'No More Drama: Conflict Resolution',
    url: 'https://medium.com/@sameer-kumar-1612/no-more-drama-conflict-resolution-b33d94d1dc75',
    date: '2023-10-24',
    readingTime: 5,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0dkdlsj15gmeu83i6rh9.png',
    summary:
      'Earth and World are not same things. You might have heard people discussing their world view, and not the earth view! Oh! you are confused? Works well for me. After ages, I am writing a non-tech article solving softer problems in this diverse tech industry.',
  },
  {
    title: 'The Pragmatic Guide to Your First JavaScript Library',
    url: 'https://medium.com/better-programming/the-pragmatic-guide-to-your-first-javascript-library-516a7b08c677',
    date: '2023-10-22',
    readingTime: 10,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgxzrox41s7gn6o8rkwsg.png',
    summary:
      'JavaScript libraries! Every man and his dog has a node_modules folder full of them. This article will be more or less a pragmatic guide to writing these without going neck-deep in history and theory.',
  },
  {
    title: 'Overcoming Vim-Phobia: My journey of redemption',
    url: 'https://betterprogramming.pub/overcoming-vim-phobia-my-journey-of-redemption-d1114e6922ab',
    date: '2023-10-06',
    readingTime: 11,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4zk8taz44mahju8rncx2.png',
    summary:
      'Hee-haw… Here we go. I have been coding for almost a decade now. And, for anyone who spends two-thirds of his day doing so, his toolchain matters. Let’s go for a walk down the memory lane. This article is going to be different.',
  },
  {
    title: 'JetBrains Fleet — A VS Code killer?',
    url: 'https://sameer-kumar-1612.medium.com/jetbrains-fleet-a-vs-code-killer-f662f45f6478',
    date: '2022-10-19',
    readingTime: 7,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23wah7gruqz1qvl8ntvm.png',
    summary:
      'An excellent lightweight polyglot IDE from JetBrains. JetBrains is pure love. It doesn’t matter which code editor you use but a few things are always of personal priority. For me, it’s aesthetics, speed, and intelligent suggestions. Extra point for aesthetics 💛.',
  },
  {
    title: '5 must have softwares for pros like you.',
    url: 'https://sameer-kumar-1612.medium.com/5-software-that-makes-a-pro-productive-fb33f6f45c22',
    date: '2022-10-07',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flz0wx9l2lbzast2v6mmc.png',
    summary:
      'I have been using Linux for many years and am amazed that there is a tool for every use case. The same goes for MacBook as well, there is a plethora of free tools that will make you more productive and at the same save a lot of frustration coming out of repetitive manual work.',
  },
  {
    title: 'React 18: When to use “useImperativeHandle” and “forwardRefs”',
    url: 'https://betterprogramming.pub/when-to-use-useimperativehandle-and-forwardrefs-in-react-18-89cce42b3309',
    date: '2022-09-13',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fuhpn7ma5c0we3z5xtb66.png',
    summary:
      'Sometimes, you have to take out the big guns This article is a continuation of where we saw what refs are and how they operate. With the knowledge gained from the previous article, let’s dive into a little more complex understanding, which can come in handy in real-world projects with a lot of component nesting and a…',
  },
  {
    title: 'React v18: useRef — What, When and Why?',
    url: 'https://betterprogramming.pub/react-v18-demystifying-useref-forwardref-and-useimperativehandle-feec2fc5b2f6',
    date: '2022-07-22',
    readingTime: 5,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmyf7nq09halg0ek9rnaq.png',
    summary:
      'The concept of values and references is not new to any programmer. Values are what the name suggests, simple snapshots of data at a point in time. To jog your memory for the latter, references are pointers to some data which may change over time, but the reference itself remains the same.',
  },
  {
    title: 'The Boy Scout Rule 💡👩‍💻',
    url: 'https://sameer-kumar-1612.medium.com/the-boy-scout-rule-de11f5b2c6a',
    date: '2022-05-23',
    readingTime: 1,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm9qphkueofucjae10u29.jpg',
    summary:
      "Most engineers have heard of the 'boy-scout rule': 'Always leave the code better than you found it.' It's often been heralded as a magic cure for technical debt; if only all software engineers behaved like good citizens, our software wouldn't deteriorate so relentlessly.",
  },
  {
    title: 'React v18: Why useEffect suddenly go crazy?',
    url: 'https://sameer-kumar-1612.medium.com/react-v18-why-useeffect-suddenly-go-crazy-db1b42eb2730',
    date: '2022-05-22',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8sdaimzvk2ulii4hj104.png',
    summary:
      'React version 18 has brought some very appreciable changes to the core. One such bittersweet change is in for form of the mount -> unmount -> remount pattern of loading components in strict mode.',
  },
  {
    title: 'Console.log and his Ninja Pals 🥷',
    url: 'https://sameer-kumar-1612.medium.com/console-log-and-his-ninja-pals-4fc0863ad5f4',
    date: '2022-05-21',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdds8t64c2dts3halstg8.png',
    summary:
      'Swiss knife of javascript ninjas, our beloved console.log has some lesser-known yet more powerful variations. In this blog, we’ll explore some methods with examples which I find very useful in day to day debugging and scripting.',
  },
  {
    title: 'React v18: useTransition hook — Why???',
    url: 'https://sameer-kumar-1612.medium.com/react-v18-usetransition-hook-why-f5d8880dc64d',
    date: '2022-05-15',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgja0bme9has1kookmmnm.png',
    summary:
      'React v18 introduced the useTransition hook, which may seem like just another hook but let’s look into the use and the indications it lays down for the future. Long long back, React hinted about the concept of concurrent mode, whose implementation was a mystery in itself.',
  },
  {
    title: "PyScript - JavaScript's sweet cousin.",
    url: 'https://dev.to/sameer1612/pyscript-javascripts-cousin-df3',
    date: '2022-05-14',
    readingTime: 1,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8ce6xqh1zva2419l0ru4.png',
    summary:
      '🐍 Python in browser movement gained some momentum nowadays. All thanks to the PyScript library. See how easy it is to bring it into a simple HTML page with no additional setup: Although the current version is not that mature it holds a ton of potential.',
  },
  {
    title: 'Testim - Automation testing on Steroids',
    url: 'https://medium.com/p/ee5eeeb3fa50',
    date: '2022-05-11',
    readingTime: 4,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2yvezp44vbmzatcoa51h.png',
    summary:
      'Artwork by Gaurav Singh Testim is an AI-based testing framework that extends the concepts laid by traditional testing veterans like Selenium, Capybara, Jest, etc. Coming from a web development background, I understand the time and effort dedicated to writing and maintaining end-to-end tests.',
  },
  {
    title: 'Technical Consultant vs Software Engineer. Which career is for you?',
    url: 'https://dev.to/sameer1612/technical-consultant-vs-software-engineer-which-career-is-for-you-1iph',
    date: '2022-03-20',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdqxwjlw4ud1jjz6rsrgl.png',
    summary:
      'Although these two titles are used interchangeably, their whole workflow and the role in a project are complementary. For the past month, I interviewed with a good number of firms for an independent and full-time consultant role. My experiences were quite wholesome and I decided to pen down this article to share them.',
  },
  {
    title: 'How do motivation and procrastination work?',
    url: 'https://dev.to/sameer1612/how-do-motivation-and-procrastination-work-30jl',
    date: '2022-02-19',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc9qfs2i38j19ms1tzx65.jpg',
    summary:
      'Build an algorithm to hack the brain and keep it on track. You are feeling low but at the same time willing to make a change and waiting for the right spark to come from inside to trigger you. By now you must have understood that problem is no more hypothetical, it’s something that unifies us as human beings.',
  },
  {
    title: 'Why does Competitive Programming love Data Structures and Algorithms?',
    url: 'https://dev.to/sameer1612/why-does-competitive-programming-love-data-structures-and-algorithms-kkh',
    date: '2022-01-29',
    readingTime: 4,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fl7i0lyhyc16bygcs1c0i.png',
    summary:
      "From the last article, I got some questions, summing up in one major query, “It's good and all, but why does everyone need to know it. There are many disciplines of engineering which doesn’t require it. I am working for the past 5 years but never needed to implement any of these”.",
  },
  {
    title: '01. Product of Array Except Self',
    url: 'https://dev.to/sameer1612/01-product-of-array-except-self-20ak',
    date: '2022-01-22',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fn1clqqx45hxm8mnzp4b7.png',
    summary:
      'I have been discussing many topics in my blog but it’s time to start from the root once again. In this blog and upcoming few we’ll discuss how to attempt general competitive programming questions, no fancy data structures or algorithms, but thinking outside the box and cooking up some good enough solutions together.',
  },
  {
    title: 'Thinking in React',
    url: 'https://dev.to/sameer1612/thinking-in-react-3m73',
    date: '2022-01-16',
    readingTime: 1,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F68vzlmqwocmy03ljk94m.png',
    summary:
      'One of the many great parts of React is how it makes you think about apps as you build them. Not a contribution from my side but have a look at this piece from react official docs. I was reading it today morning and thought it will be good if you guys have a read too!',
  },
  {
    title: 'Enum on Rails — A shallow dive 💎',
    url: 'https://dev.to/sameer1612/enum-on-rails-a-shallow-dive-e4m',
    date: '2022-01-02',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8rdemrtfi0ybdh0mdmf3.jpeg',
    summary:
      'After so long, active again. Let’s have a look at beloved ActiveRecord this time. It packs up too much to be covered in simple glance, one such feature is interpretation of enums in rails. Enums are nothing more than an array technically in other languages but here its high on steroids.',
  },
  {
    title: 'Why is Shopify using "Ruby on Rails" to build its $3 billion dollar e-commerce business?',
    url: 'https://railsfactory.com/shopify-using-ror-to-built-multi-billion-dollar-ecommerce-business',
    date: '2021-09-15',
    readingTime: 4,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwgd9c7o855ya889lpwgi.jpeg',
    summary:
      'It would be an understatement to say Shopify is the unicorn of the eCommerce business. Shopify is used by millions of merchants all over the world to build their online presence and market their products.',
  },
  {
    title: '🔝 3 CSS frameworks for you.',
    url: 'https://dev.to/sameer1612/3-css-frameworks-for-you-4noe',
    date: '2021-07-30',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftoj9733eqfoyzua9iqwc.png',
    summary:
      "First of all, let's give some thought to what’s so special about frameworks and what makes them different from libraries. Libraries: We give you features, it's your will to use them the way you like. Frameworks: We give you features as well as rules on how to use them.",
  },
  {
    title: 'Top 5 Extensions for your VS Code 🏅',
    url: 'https://dev.to/sameer1612/top-5-extensions-for-your-vs-code-him',
    date: '2021-07-18',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F03aatqyk2thidpslcvgr.png',
    summary:
      'Your productivity is governed by your tool belt. Obviously, you can write code in a notepad or a terminal, but if productivity does count for you, then VS Code is the most customizable of all editors/IDEs.',
  },
  {
    title: 'Cron Jobs — Master Worker Strategy 🧮',
    url: 'https://dev.to/sameer1612/cron-jobs-master-worker-strategy-55d2',
    date: '2021-07-11',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F37gf4ftz7ib5u5k0yv21.png',
    summary:
      '😇 Well hello, and welcome back. In this article, we’ll discuss parallel execution and background processing of heavy tasks. An awesome developer like you does often write some mundane tasks to run in the background every night or so but you also want an army of elves to take control of the process and finish it as…',
  },
  {
    title: 'SERVICE OBJECTS — At your service…',
    url: 'https://dev.to/sameer1612/service-objects-at-your-service-3532',
    date: '2021-06-27',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ff15g1zpzzsna9udzernk.png',
    summary:
      'Don’t worry its just a version of typical corporate employee… It’s a design pattern article and is independent of language you implement it into. So, Service Objects, seems fancy, right? Well let me tell you this is what you have been doing all along in a slightly un-organized way.',
  },
  {
    title: 'Coding Styles: Imperative, Declarative and DSL🤯',
    url: 'https://sameer-kumar-1612.medium.com/imperative-declarative-and-dsl-coding-styles-89a50202896f',
    date: '2021-06-26',
    readingTime: 4,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F53kmx5590tmk2pixg8k3.jpg',
    summary:
      'Hey You! Don’t be afraid of these terms, read, learn and confuse others! 💁 The first thing to note is in the title is that I didn’t mention Versus as no soul on this beautiful earth can draw a straight line between them.',
  },
  {
    title: 'DATATABLE ON RAILS',
    url: 'https://sameer-kumar-1612.medium.com/datatable-on-rails-e371fe5a747d',
    date: '2021-06-23',
    readingTime: 3,
    cover:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fx6knmfpxwld3z18zqb2e.png',
    summary:
      'You are a developer full of joy and enthusiasm toward changing the world, writing ninja codes driving million-dollar businesses every day. And, then you have to write codes for displaying customer/products/orders data in a table and you spend a month writing pagination, sorting, searching, async fetching and…',
  },
];
