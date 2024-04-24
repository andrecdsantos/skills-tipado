import Link from 'next/link';
import React from 'react'
import { FaPoo } from "react-icons/fa";
import Navbar from './Navbar';
import UserSettings from './UserSettings';
import { signIn, signOut } from 'next-auth/react'
import FormSearch from './FormSearch';

const Header = () => {
  return (
    <header className='relative flex flex-col md:flex-row justify-between w-full p-3 bg-secondary'>
        <div className="flex justify-between items-center pe-4 pb-4 md:pb-0 grow">
          <Navbar/>
          <Link className='flex gap-2 text-2xl hover:text-tertiary' href={'/'}>
              <FaPoo />
              <h1>Logo</h1>
          </Link>
          <UserSettings image={null}/>
        </div>
        <FormSearch/>
    </header>
  )
}

export default Header