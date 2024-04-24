'use client'
import { redirect } from 'next/navigation'
import React, { KeyboardEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const FormSearch = () => {
  const [query, setQuery] = useState('')
  const handleKeyPressed = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') redirect(`/${query}`)    
  }
  return (
    <form action={`/${query}`} className='flex mt-0 md:mt-1 h-8 gap-2 md:order-3'>
            <input 
                type="text" 
                placeholder='Buscar' 
                value={query}
                onChange={e=> setQuery(e.target.value)}
                onKeyDown={e=>handleKeyPressed(e)}
                className='w-full md:w-44  px-2 text-secondary'/>
            <button className='hover:text-tertiary'>
                <FaSearch/>
            </button>
    </form>
  )
}

export default FormSearch