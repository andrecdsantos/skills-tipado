'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import LoginGoogleBtn from '../components/Login/LoginGoogleBtn'

const Login = () => {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')

    async function login(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        signIn('credentials', {...data, callbackUrl:'/'})
    }
  return (
    <div className='flex items-center justify-center'>
        <div className='bg-secondary text-secondary p-3 max-w-80 rounded-md grow'>
            <form onSubmit={login}>
                <label htmlFor="email" className='text-white mb-2 block'>e-mail</label>
                <input 
                    type="text" 
                    name='email'
                    placeholder='email.com' 
                    className='w-full p-2 mb-2 rounded-md'
                />
                <label htmlFor="password" className='text-white mb-2 block'>senha</label>
                <input 
                    type="password" 
                    name='password'
                    placeholder='senha' 
                    className='w-full p-2 mb-2 rounded-md'
                />
                {error == 'CredentialsSignin' &&
                    <div className="h-12 text-xl text-center text-red-500 px-4 mb-2">Email ou senha invalida</div>
                }
                <button className='bg-primary hover:bg-tertiary text-white hover:text-secondary w-full p-2 my-2 rounded-md'>Login</button>
                <Link href={'/'} className='text-white hover:text-tertiary'>Ainda não possui uma conta?</Link>
            </form>
                <LoginGoogleBtn/>
        </div>
    </div>
  )
}

export default Login