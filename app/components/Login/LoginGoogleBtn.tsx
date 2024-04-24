'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const LoginGoogleBtn = () => {
  return (
    <button onClick={()=>signIn('google', {callbackUrl: '/'})}
        className='flex gap-2 items-center justify-center bg-white border border-neutral-900 p-2 w-full rounded-md'
    >
        <FcGoogle/>
        Continuar com Google
    </button>
  )
}

export default LoginGoogleBtn