import Link from 'next/link'
import React from 'react'

export default function AdminPage({children}) {
  return (
    <div className=' h-full flex gap-2 '>
    
      <div className='text-black w-20 p-5'>
          <div className='flex flex-col gap-3' >
              <Link href='/admin/' ><button className="w-16 hover:w-12 p-2 bg-greenDark transition-all duration-75">Inicio</button></Link>
              <Link href='/admin/publicaciones/Create' className=' w-10 hover:w-12 bg-greenDark'><button className='  p-2 w-16 hover:w-12 bg-greenDark transition-all duration-75'>Crear</button></Link>

          </div>
      </div>

      <div className='w-full  text-black bg-white '>
          {children}
      </div>
    </div>
  )
}
