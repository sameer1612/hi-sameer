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

  return (
    <main>
      <h1 className="title-1 text-center text-primary my-5">About</h1>
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
