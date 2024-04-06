import './socials.scss';
import Link from 'next/link';
import { DiGithubFull } from 'react-icons/di';
import { FaEnvelope, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

export function Socials() {
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
  );
}
