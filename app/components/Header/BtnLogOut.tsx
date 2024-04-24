'use client'
import { signOut } from "next-auth/react"

export const BtnLogOut = () => {
    'use client'
    return (
        <button onClick={()=>signOut()}>
            Logout
        </button>
    )
}