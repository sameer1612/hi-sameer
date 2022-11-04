import { Component, OnInit } from '@angular/core';

interface Testimonial {
  name: string;
  about: string;
  message: string;
  photoUrl: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      name: 'Tarini Charana Mishra',
      about: 'Professor, SIT Bhubaneswar',
      message: `Sameer was an exceptional student in terms of intellectual
      capability and his interest in development. He has
      undertaken projects in field of IOT and Web development. He
      was a technology enthusiast as well as a good teacher at
      college mentoring his fellows and junior students.`,
      photoUrl: '../../assets/img/testimonial/tarini.jpeg',
    },
    {
      name: 'Alok Patnaik',
      about: 'Professor &amp; Astronomy Researcher at KIIT',
      message: `It's always a pleasure to discuss ideas with him for his
      in-depth knowledge of the subject. He is a thorough
      professional in his dealings - punctual, focused, sincere
      and dedicated. He is adventurous, would not hesitate to get
      in to new ideas and new technologies. He is an asset to any
      team he works with.`,
      photoUrl: '../../assets/img/testimonial/alok.jpeg',
    },
    {
      name: 'Nirmal Hota',
      about: 'Project Manager, Mindfire Solutions',
      message: `Sameer is a very technology passionate guy I have ever met.
      He has started his career in my team as an intern to fresher
      to a fully grown developer. I witnessed his quick growth and
      maturity of technology in him.`,
      photoUrl: '../../assets/img/testimonial/nirmal.jpeg',
    },
    {
      name: 'Rishav Kumar',
      about: 'Software Engineer, Big Binary',
      message: `Sameer's multitasking ability was unlike I've seen before.
      I've worked with many developers but when it comes to Ruby
      on Rails, he's really good at it. In short span of time, he
      has gained ample of experience in Ruby on Rails. Sameer will
      be a valuable asset to any company.`,
      photoUrl: '../../assets/img/testimonial/rishav.jpeg',
    },
    {
      name: 'JP Mohapatra',
      about: 'Sr.Software engineer at Mindfire solutions',
      message: `He proves his uniqueness and dedication each time he get a
      chance to resolve complex issues or handling the client.
      Never forgets to add some extra efforts towards sharing the
      same knowledge among team mates. It was a pleasure working
      with Sameer and wish him a great future ahead.`,
      photoUrl: '../../assets/img/testimonial/jyoti.jpeg',
    },
    {
      name: 'Sarthak Sahoo',
      about: 'Systems Engineer, Infosys',
      message: `Sameer is a very good learner of new technologies and worked
      in different projects with new technologies. He is a very
      good team player and his commitment for a work is one of the
      best thing.`,
      photoUrl: '../../assets/img/testimonial/sarthak.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
