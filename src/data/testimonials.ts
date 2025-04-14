type Testimonial = {
  author: string;
  designation: string;
  content: string;
};

export const testimonials: Testimonial[] = [
  {
    author: 'Shamil Siddique',
    designation: 'Technical Consultant, TarkaLabs',
    content: `Sameer is an absolute pleasure to work with. During my time on his team, I found him to be incredibly approachable and easy-going. 
    His confidence in his skills is clear, and he consistently ensures that everything he touches is left in a better state than it was before. 
    It was a privilege to work with him, and I look forward to more future opportunities to be a part of his team!`,
  },
  {
    author: 'Tarini Charana Mishra',
    designation: 'Silicon Tech Lab, Bhubaneswar',
    content: `Sameer was an exceptional student in terms of intellectual capability and his interest in development. He has undertaken
      projects in field of IOT and Web development. He was a technology enthusiast as well as a good teacher at college mentoring
      his fellows and junior students.`,
  },
  {
    author: 'Sarthak Sahoo',
    designation: 'Software Engineer at Cisco',
    content: `Sameer is a very good learner of new technologies and worked in different projects with new technologies. He is a very
      good team player and his commitment for a work is one of the best thing.`,
  },
  {
    author: 'Alok Patnaik',
    designation: 'Professor, Astronomy Researcher at KIIT',
    content: `It's always a pleasure to discuss ideas with him for his in-depth knowledge of the subject. He is a thorough professional
      in his dealings - punctual, focused, sincere and dedicated. He is adventurous, would not hesitate to get in to new ideas
      and new technologies. He is an asset to any team he works with.`,
  },
  {
    author: 'Nirmal Hota',
    designation: 'Director | Co-founder | CEO',
    content: `Sameer is a very technology passionate guy I have ever met. He has started his career in my team as an intern to fresher
      to a fully grown developer. I witnessed his quick growth and maturity of technology in him.`,
  },
  {
    author: 'Rishav Kumar',
    designation: 'Software Engineer, Big Binary',
    content: `Sameer's multitasking ability was unlike I've seen before. I've worked with many developers but when it comes to Ruby on
      Rails, he's really good at it. In short span of time, he has gained ample of experience in Ruby on Rails. Sameer will be a
      valuable asset to any company.`,
  },
  {
    author: 'JP Mohapatra',
    designation: 'Sr. Software Engineer',
    content: `He proves his uniqueness and dedication each time he get a chance to resolve complex issues or handling the client. Never
      forgets to add some extra efforts towards sharing the same knowledge among team mates. It was a pleasure working with
      Sameer and wish him a great future ahead.`,
  },
  {
    author: 'Amit Soni',
    designation: 'Sr. Software Engineer, Mindfire Solutions',
    content: `I had the pleasure of working with Sameer at Mindfire Solutions in Bhubaneswar, where he truly distinguished himself. 
        His deep expertise in modern technologies like Ruby on Rails and JavaScript was evident, 
        and he showcased remarkable technical skill along with a strong understanding of business requirements. 
        Sameer communicated seamlessly with clients and product owners, 
        needing little supervision and making significant contributions to project's success.
        <br/>
        <br/>
        Overall, collaborating with Sameer was an excellent experience. 
        I highly recommend him for any role that would benefit from his outstanding skills and enthusiasm.`,
  },
  {
    author: 'Vishal Bihani',
    designation: 'Software Engineer, Zensar Technologies',
    content: `Sameer and I worked on a common project. 
    Though our roles were different, I have to say that he is as reliable as a sunrise every morning. 
    His work speaks of quality. Even though I only got to see his front-end expertise, 
    I am sure he is capable of picking up any problem statement thrown at him.`,
  },
  {
    author: 'Archit Singh',
    designation: 'Software Engineer, Tarka Labs',
    content: `
     I had the chance to work with Sameer at Tarka Labs, and he's an exceptional Software Engineer. 
     His problem-solving skills and ability to create efficient solutions always stood out. 
     He really knows how to tackle complex challenges and simplify them in a way that makes sense for everyone involved.
     <br />
     <br />
     What I appreciated most was how willing he was to share his knowledge. 
     Anytime someone had a question or needed help, Sameer was always there to offer guidance. 
     It definitely made the team stronger.`,
  },
  {
    author: 'Luke Burroughs',
    designation: 'Art Direction and Design, Foolproof UK',
    content: `At Foolproof, we worked with Sameer on a client account. 
      Sameer was excellent, and onboarded to the project very quickly, 
      took to the work like a duck out of water, 
      and was a constant source of truth for the designers throughout the development setup and process. 
      <br />
      <br />
      We had a short turn around time, so having Sameer be authoritative and give us the insight 
      we needed to tweak and change the componentry for the design libraries sped up the process and 
      created alignment all around. the stakeholders were impressed with the speed of the work and delivery 
      and it was refreshing to work with a developer who was building daily and sharing work reguarly. 
      <br />
      <br />
      Would highly recommend Sameer. He would make a great addition to any team. All the best, Sameer.`,
  },
].sort((a, b) => a.author.localeCompare(b.author));
