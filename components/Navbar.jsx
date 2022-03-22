import React,{ useState}from 'react'
import Link from 'next/link'
import Admin from './Admin'
import {HiUserCircle } from 'react-icons/hi'
import { useSession, signIn, signOut } from 'next-auth/react'


export default function Navbar() {

  const {data:session } = useSession()
  const [option, setOption]= useState(false)

  return ( <nav className=' text-white bg-greenDark py-4 px-8 '>


    <ul className='flex justify-between gap-5 text-sm'>
      <div >
            <Link href='/'>MI</Link>
      </div>

      <div className='flex gap-5 '>
            <Link href='/'>Inicio</Link>
            <Link href='/Categoria'>Categoria</Link>
            <Link href='/'>Contacto</Link>
      </div>

      <div className='flex gap-7 justify-end '>
              {!session?.user?.email?<button onClick={(signIn)}>Login</button>
              :<h1>{session.user.name}</h1>}
            

           {session?.user&&<button className='hover:scale-125 w-7 h-7' onClick={()=>{setOption(!option)}}><HiUserCircle className='w-7 h-7'/> </button>}
           {option&&
            <Admin optionA={setOption} className='absolute right-0  top-0'/>
           } 
          
      </div>

    </ul>
          
  </nav>
    
  )
}
