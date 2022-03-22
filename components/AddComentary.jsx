import axios from 'axios'
import { useRouter } from 'next/router'
import React,{ useRef, useState} from 'react'

export default function AddComentary({ idPublicacion}) {
    console.log(idPublicacion)
    const Router = useRouter()
    
    const comentario = useRef()
    const raiting = useRef()
    const [cometarioCreado, setComentario]= useState(false)

    const saveComent= ()=>{
      axios.post("/api/publicacion/AddComentary",{
         // usuario:
         date: new Date(),
         comentary: comentario.current.value,
         raiting: raiting.current.value,
         idPublicacion: idPublicacion
      }).then(res=>{
        Router.replace(`/admin/publicaciones/${idPublicacion}`)
       
      }).catch(error=>{
        console.log(error)
        
      })

      setComentario(false)
    }

  return (
    <>
    
    {cometarioCreado?<h1>Creado Exitosamente</h1>:
    
    
    <div className='flex  flex-col  p-5 mt-3  w-full gap-3 border border-2'>
        <h1>Anadir Comentario</h1>

        <div className='flex gap-3 '>
        <input type="text"  ref={comentario} className='h-20 w-3/4 text-black border border-2 bg-slate-200 '/>
        

        <div className='flex flex-col my-3'>
                   <label htmlFor="">Calificacion</label>
                   <select ref={raiting} name="" id="" className='bg-slate-200'>
                         <option value={1}>⭐</option>
                         <option value={2}>⭐⭐</option>
                         <option value={3}>⭐⭐⭐</option>
                         <option value={4}>⭐⭐⭐⭐</option>
                         <option value={5}>⭐⭐⭐⭐⭐</option>
                   </select>
 
         </div>
        </div>
       
        
        <button onClick={saveComent} className='bg-slate-200 w-24 rounded-md hover:bg-slate-500 hover:text-white mx-auto'>crear</button>
    </div>
    
    }
   </> 
  )
}
