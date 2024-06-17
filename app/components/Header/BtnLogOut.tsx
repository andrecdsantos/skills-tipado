import { signOut } from "@/app/login/provider"

//import { signOut } from "next-auth/react"

export const BtnLogOut = () => {
    return (
        <form action={async()=> {
            'use server'
            await signOut()
          }}>
            <button type="submit" className="hover:underline">Sign out</button>
          </form>
    )
}
{/* <button onClick={()=>signOut()}>
    Logout
</button> */}