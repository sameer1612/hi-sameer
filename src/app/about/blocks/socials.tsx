import Link from 'next/link';
import { DiGithubFull } from 'react-icons/di';
import { FaEnvelope, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

export function Socials() {
  const socials = [
    {
      name: 'github',
      url: 'https://github.com/sameer1612',
      icon: <DiGithubFull />,
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sameerkumar1612/',
      icon: <FaLinkedinIn />,
    },
    {
      name: 'medium',
      url: 'https://medium.com/@sameer-kumar-1612',
      icon: <FaMediumM />,
    },
    {
      name: 'email',
      url: 'mailto:cyber726337@gmail.com',
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className="my-8 px-2">
      <h1 className="font-acorn my-8 text-center text-primary">Let's connect</h1>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {socials.map(social => (
          <Link
            href={social.url}
            key={social.name}
            className="rounded-full bg-white p-6 text-4xl lg:p-12 lg:text-7xl"
            target="blank"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
