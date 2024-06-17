//import { getServerSession } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { BtnLogOut } from './BtnLogOut'
import { BtnLogin } from './BtnLogin'
import Link from 'next/link'
import { auth } from '@/app/login/provider'

//getServerSession server component >> useSession client component
const UserSettings = async ( { image } : { image : string | null | undefined}) => {
    //const session = await getServerSession()
    const session = await auth()
    image = session?.user?.image

    /* const submitForm = async ( button: string ) => {
        button == 'Sign in' ? await signIn() : await signOut()      
    } */

  return (
    <div className='md:order-3 flex items-center gap-2'>
            <Link href={'/profile'}>
                <Image
                    src={image || '/user-40x40.jpg'}//operador || retorna o lado e caso nao esteja vazio
                    alt={`avatar de ${image ? image : 'usuário'}`}
                    width={40}
                    height={40}
                    className='rounded-full'
                    title='Perfil'
                />
            </Link>
            {/* {session ? <button onClick={async()=> {'use server'; await signOut()}}>Sign out</button> : <button onClick={async()=>{'use server'; await signIn()}}>Sign in</button>} */}
            {session ? <BtnLogOut/> : <BtnLogin/>}
        </div> 
    
  )
}

export default UserSettings

