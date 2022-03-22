import React from 'react'
import Link from 'next/link'

export default function PostHome({publicacion, idPublicacion, card, categoria, popular}) {
  console.log(card)
  const publicacionID='DDFDFDF'
  const date1= new Date(publicacion.date)
  var options ={weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  const date2 = new Intl.DateTimeFormat('en-Us',options).format(date1)
    
  return (
    <>
        <div className={`${card&&'w-64 hover:w-72' } shadow-sm ${categoria&&'w-80 hover:w-5/6'} h-96 ${popular&&'h-1/3'}   mx-5 hover:shadow-lg hover:scale-105 transition-all duration-500`}>
          <div className='text-slate-800   bg-white rounded-xl overflow-hidden' >
              <div className={`${card&&'text-red-900' } mb-4 overflow-hidden ${popular&&'h-12'} h-72 hover:scale-105 transition-all duration-300`}>
                  <Link href={`/admin/publicaciones/${idPublicacion}`} ><img src={publicacion.image} alt="" className='w-full h-auto   object-contain ' /></Link> 
                  
              </div>
              <small className={`${popular&&'hidden'}`}>{date2}</small>
              
              <h1 className={`${popular&&'hidden hover: inline'}`}> className='font-bold'>{publicacion?.title}</h1>
             <p className={`${popular&&'hidden'}`}>{publicacion?.category}</p>
              
          </div>


        </div>

    </>
  )
}
