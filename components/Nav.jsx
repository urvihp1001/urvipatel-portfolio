"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const links=[
  {name: 'Home', path: '/'},
  {name:'Services', path: '/services'},
  {name:'Resume', path: '/resume'},
  {name:'Work', path: '/work'},
  {name:'Contact', path: '/contact'}
]

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
  <nav className='flex gap-8'>
    {links.map((link, index) => {
      return (
        <Link
          href={link.path}
          key={index}
          className={`capitalize font-medium hover:text-accent transition-all ${link.path === pathname ? "text-accent border-b-2 border-accent" : ""}`}
        >
          {link.name}
        </Link>
      );
    })}
  </nav>
  )
}

export default Nav