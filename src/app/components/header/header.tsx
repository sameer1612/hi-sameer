'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.scss';

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center py-4">
      <Link className={'link ' + (pathname === '/' || pathname === '/home' ? 'active' : '')} href="home">
        <button className="btn rounded-full">Home</button>
      </Link>
      <Link className={'link ' + (pathname === '/about' ? 'active' : '')} href="about">
        <button className="btn rounded-full">About</button>
      </Link>
      <Link className={'link ' + (pathname === '/tech' ? 'active' : '')} href="tech">
        <button className="btn rounded-full">Tech</button>
      </Link>
      <Link className={'link ' + (pathname === '/blog' ? 'active' : '')} href="blog">
        <button className="btn rounded-full">Blog</button>
      </Link>
    </nav>
  );
}
