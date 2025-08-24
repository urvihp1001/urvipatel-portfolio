"use client"

import { Sheet,SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
const links=[
  {name: 'Home', path: '/'},
  {name:'Services', path: '/services'},
  {name:'Resume', path: '/resume'},
  {name:'Work', path: '/work'},
  {name:'Contact', path: '/contact'}
]

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className='text-[32px] text-accent'/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <SheetTitle></SheetTitle>
        {/*Logo */}
        <div className='mt-32 mb-40 text-center text-2xl text-white'>
            <Link href='/'>
            <h1 className='text-4xl font-semibold'>
            Urvi Patel<span className='text-accent'>.</span>
        </h1>
            </Link>
        </div>
        {/*Navigation */}
          <nav className='flex flex-col justify-center items-center gap-8'>
    {links.map((link, index) => {
      return (
        <Link
          href={link.path}
          key={index}
          className={`capitalize font-medium text-white hover:text-accent transition-all ${link.path === pathname ? "text-white border-b-2 border-accent" : ""}`}
        >
          {link.name}
        </Link>
      );
    })}
  </nav>

    </SheetContent>
    </Sheet>
  )
}

export default MobileNav