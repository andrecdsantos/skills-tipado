'use client'
import { signIn } from "next-auth/react"

export const BtnLogin = () => {
    'use client'
    return (
        <button onClick={()=>signIn()}>
            Login
        </button>
    )
}