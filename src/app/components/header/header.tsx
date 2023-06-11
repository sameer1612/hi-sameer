'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.scss';

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand bg-transparent mt-2">
      <div className="navbar-nav w-100 d-flex justify-content-center">
        <Link className={'link ' + (pathname === '/' || pathname === '/home' ? 'active' : '')} href="home">
          <button className="btn rounded-pill">Home</button>
        </Link>
        <Link className={'link ' + (pathname === '/about' ? 'active' : '')} href="about">
          <button className="btn rounded-pill">About</button>
        </Link>
        <Link className={'link ' + (pathname === '/services' ? 'active' : '')} href="services">
          <button className="btn rounded-pill">Services</button>
        </Link>
        <Link className={'link ' + (pathname === '/blog' ? 'active' : '')} href="blog">
          <button className="btn rounded-pill">Blog</button>
        </Link>
      </div>
    </nav>
  );
}
