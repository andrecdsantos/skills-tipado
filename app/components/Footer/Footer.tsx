import Link from 'next/link'
import { FaPoo } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full p-3 flex flex-col items-center bg-secondary'>
        <Link className='flex gap-2 text-2xl hover:text-tertiary' href={'/'}>
            <FaPoo />
            <h1>Logo</h1>
        </Link>
        <p>&copy;Desenvolvido por @andrecdsantos0</p>
    </div>
  )
}

export default Footer