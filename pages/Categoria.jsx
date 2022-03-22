import Link from 'next/link'
import React from 'react'
import CategoriaPublicacion from './admin/publicaciones/categoria/[idcategoria]'

export default function Categoria({children}) {
  return (
    <div className='text-black p-4'>
      <h1 className='text-center text-2xl '>Publicaciones</h1>
      <div className='flex justify-center gap-5 mb-2'>

        <Link href={`/admin/publicaciones/categoria/Astronomia`}><button className='text-black w-32 rounded-md hover:w-36 bg-greenDark transition-all duration-75' > Astronomia</button></Link>
        <Link Link href={`/admin/publicaciones/categoria/Fotografia`}><button className='text-black w-32 rounded-md hover:w-36 bg-greenDark'> Fotografia</button></Link>  
      </div>
       

     <main  className='bg-slate-300 rounded-xl'>{children}</main>


    </div>
  )
}
