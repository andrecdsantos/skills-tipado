'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaBars, FaWindowClose, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FcCollapse } from "react-icons/fc";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleOthers = () => setIsOthersOpen(!isOthersOpen)
  const links = [
    {
        name: 'Home',
        href: '/',
        submenu: false,
        sublinks: []
    },
    {
        name: 'Flip',
        href: '/flip',
        submenu: false,
        sublinks: []
    },
    {
        name: 'Outros',
        href: '/',
        submenu: true,
        sublinks: [
            {
                name: 'Carrossel',
                href: '/carousel'
            },
            {
                name: 'Carrossel Animado',
                href: '/carousel-animated'
            },
        ]
    },
  ]
  return (
    <nav className='flex md:order-1 z-30'>
            <ul className={`md:flex gap-4 absolute md:static ${isMenuOpen ? 'left-0' : '-left-full'} top-full transition-all duration-500 ease-in-out bg-secondary p-2 min-w-40`}>
                {links.map(link => 
                    !link.submenu ?
                    <li key={link.name} className='hover:text-tertiary'>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                    :
                    <button key={link.name} className='relative' onClick={toggleOthers}>
                        <div className='hover:text-tertiary flex items-center'>
                            <span>{link.name}</span>
                            {isOthersOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <ul className={`${isOthersOpen ? 'inline-grid' : 'hidden'} static md:absolute top-full md:right-1/2 md:translate-x-1/2 bg-secondary p-2 text-start w-max`}>
                            {link.sublinks.map(sublink=>
                                <li key={sublink.name} className='hover:text-tertiary'>
                                    <Link href={sublink.href}>{sublink.name}</Link>
                                </li>
                            )}
                        </ul>
                    </button>

                )}
            </ul>
            <button className='flex md:hidden' onClick={toggleMenu}>
                {isMenuOpen ? <FaWindowClose/> : <FaBars/>}
            </button>
        </nav>
  )
}

export default Navbar