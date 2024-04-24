import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { BtnLogOut } from '../components/Header/BtnLogOut'
import Image from 'next/image'

const Profile = async () => {
    const session = await getServerSession()
    if(!session) return redirect('login')
  return (
    <div className='flex items-center justify-center'>
        <div className='bg-secondary text-white p-3 max-w-80 rounded-md grow flex flex-col *:mb-2'>
            <h1 className='text-2xl text-center'>Perfil</h1>
            <div>
                <b>Usúario: </b>
                {session.user?.name}
            </div>
            <div>
                <b>e-mail: </b>
                {session.user?.email}
            </div>
            <div>
                {session.user?.image && 
                    <Image
                        src={session.user?.image}
                        alt='imagem usuário'
                        width={50}
                        height={50}
                        className='rounded-full mx-auto'
                    />
                }
            </div>
            <div className='p-2 bg-primary rounded-xl text-center'>
                <BtnLogOut/>
            </div>
        </div>
    </div>
  )
}

export default Profile