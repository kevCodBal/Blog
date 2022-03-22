import Link from 'next/link'
import React from 'react'
import {FiX} from 'react-icons/fi'
import {useSession, signOut} from 'next-auth/react'

export default function Admin({optionA}) {
    const {data: session} = useSession()
    const option = true
  return (
    <div className='absolute w-full h-full  ' onClick={()=>optionA(false)}>
        <ul className={`${option?"block":"hidden"} absolute right-0 top-0 bg-slate-300 p-2` }>

            <div className='flex justify-end '>
                 <button className='' onClick={()=>{optionA(false)}}><FiX/></button>
            </div>
            <li className='hover:bg-greenDark hover:text-white p-3 pl-20'>
                <Link href='/'>Perfil</Link>
            </li>
            {session?.user?.role==="admin"&&<li className='hover:bg-yellow-100 hover:text-white p-3 pl-20'>
                    <Link href='/admin'>Admin</Link></li>}
            <li className='hover:bg-greenDark hover:text-white p-3 pl-20'>
                <button className='flex items-center gap-3' onClick={()=>signOut()}>Sign out</button>
            </li>

                   
        </ul>
    </div>
  )
}
