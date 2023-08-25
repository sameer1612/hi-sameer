import Image from 'next/image';
import Link from 'next/link';
import { DiGithubFull } from 'react-icons/di';
import { FaEnvelope, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import './about.scss';
import Timeline from './timeline';

export default function About() {
  const socials = [
    {
      name: 'github',
      url: 'https://github.com/sameer1612',
      icon: <DiGithubFull />
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sameerkumar1612/',
      icon: <FaLinkedinIn />
    },
    {
      name: 'medium',
      url: 'https://medium.com/@sameer-kumar-1612',
      icon: <FaMediumM />
    },
    {
      name: 'email',
      url: 'mailto:cyber726337@gmail.com',
      icon: <FaEnvelope />
    }
  ];

  const testimonials = [
    {
      author: 'Tarini Charana Mishra',
      designation: 'Silicon Tech Lab, Bhubaneswar',
      content:
        `Sameer was an exceptional student in terms of intellectual capability and his interest in development. He has undertaken
        projects in field of IOT and Web development. He was a technology enthusiast as well as a good teacher at college mentoring
        his fellows and junior students.`
    },
    {
      author: 'Sarthak Sahoo',
      designation: 'Software Engineer at Cisco',
      content:
        `Sameer is a very good learner of new technologies and worked in different projects with new technologies. He is a very
        good team player and his commitment for a work is one of the best thing.`
    },
    {
      author: 'Alok Patnaik',
      designation: 'Professor, Astronomy Researcher at KIIT',
      content:
        `It's always a pleasure to discuss ideas with him for his in-depth knowledge of the subject. He is a thorough professional
        in his dealings - punctual, focused, sincere and dedicated. He is adventurous, would not hesitate to get in to new ideas
        and new technologies. He is an asset to any team he works with.`
    },
    {
      author: 'Nirmal Hota',
      designation: 'Director | Co-founder | CEO',
      content:
        `Sameer is a very technology passionate guy I have ever met. He has started his career in my team as an intern to fresher
        to a fully grown developer. I witnessed his quick growth and maturity of technology in him.`
    },
    {
      author: 'Rishav Kumar',
      designation: 'Software Engineer, Big Binary',
      content:
        `Sameer's multitasking ability was unlike I've seen before. I've worked with many developers but when it comes to Ruby on
        Rails, he's really good at it. In short span of time, he has gained ample of experience in Ruby on Rails. Sameer will be a
        valuable asset to any company.`
    },
    {
      author: 'JP Mohapatra',
      designation: 'Sr. Software engineer',
      content:
        `He proves his uniqueness and dedication each time he get a chance to resolve complex issues or handling the client. Never
        forgets to add some extra efforts towards sharing the same knowledge among team mates. It was a pleasure working with
        Sameer and wish him a great future ahead.`
    }
  ];

  return (
    <main>
      <h1 className="title-1 text-center text-primary mt-5">About</h1>
      <div className="d-flex flex-column align-items-center">
        <Image src="/images/sameer.png" width={400} height={400} alt="Sameer Kumar, Software Engineer"></Image>
        <div className="card about-card text-primary rounded-5 mb-5">
          <p className="bio">
            I'm Sameer, a passionate web developer and creative enthusiast. With a deep love for all things tech, I
            thrive in the ever-evolving world of web development. Armed with a keyboard and an insatiable curiosity, I
            embark on exciting coding adventures, crafting immersive digital experiences that captivate audiences. My
            journey began with a fascination for the limitless possibilities of the internet. As I delved into the realm
            of web development, I discovered the power to shape ideas into tangible realities. From dynamic websites
            that seamlessly engage users to innovative applications that simplify complex tasks, I relish the
            opportunity to push the boundaries of what's possible.
            <br />
            <br />
            With every project, I immerse myself in the client's vision, understanding their unique goals and
            aspirations. I believe that successful websites not only look visually stunning but also deliver exceptional
            user experiences. Beyond the technical aspects, I find inspiration in the vibrant world around me. I
            constantly explore the latest design trends, stay updated with industry advancements, and dive into new
            frameworks and technologies to stay at the forefront of innovation. Collaboration is at the heart of my
            process. I value open communication and work closely with clients to ensure their vision is brought to life.
            By fostering a collaborative environment, I create long-lasting partnerships built on trust, reliability,
            and exceptional results.
            <br />
            <br />
            Whether you're an individual with a groundbreaking idea, a startup seeking a striking online presence, or a
            business aiming to expand its digital footprint, I'm here to help you turn your dreams into reality.
            Together, let's embark on a digital journey that will leave a lasting impression. Join me on this exciting
            adventure, and let's transform your online presence into something extraordinary.
            <br />
            <br />
            Together, we'll make the something spectacular, one line of code at a time.
          </p>
        </div>

        <h1 className="font-acorn text-primary mt-5 my-journey-title">My Journey</h1>
        <Timeline />

        <h1 className="font-acorn text-primary mt-5 mb-0 my-journey-title">Testimonials</h1>
        <small className="mb-5 text-primary source-linkedin">Sourced from LinkedIn</small>
        <div className="row testimonial-grid container gx-4 gy-3">
          {testimonials.map(testimonial => (
            <div className="col-sm-12 col-md-6" key={testimonial.author}>
              <div className="testimonial-card rounded-4">
                <p className="content">{testimonial.content}</p>
                <small className="mt-auto">
                  - {testimonial.author}, {testimonial.designation}
                </small>
              </div>
            </div>
          ))}
        </div>

        <div className="socials">
          <h1 className="font-acorn text-primary my-journey-title">Let's connect</h1>
          <div className="circles">
            {socials.map(social => (
              <Link href={social.url} key={social.name} className="circle-link shadow-sm" target="blank">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
