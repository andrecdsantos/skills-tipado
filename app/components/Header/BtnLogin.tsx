

import { signIn } from "@/app/login/provider"
import Link from "next/link"

//import { signIn } from "next-auth/react"
{/* <button onClick={()=>signIn()}> 
            Login
        </button> */}

/* 

<form action={async ()=> {
            'use server' 
            await signIn()
        }}>
            <button type='submit'> 
                Login
            </button>
        </form>
*/

export const BtnLogin = () => {
    return (
        <Link href={'/login'}>Login</Link>
        
    )
}