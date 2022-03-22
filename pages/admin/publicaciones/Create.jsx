import React, {useState, useRef} from 'react'
import AdminPage from '../../../components/AdminPage'
import dynamic from 'next/dynamic'
import '@uiw/react-markdown-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css'
import axios from 'axios';
import Router from 'next/router';
import { useSession } from 'next-auth/react';


const MarkDownEditor = dynamic(
    ()=>import("@uiw/react-markdown-editor").then((mod)=>mod.default),{
        ssr:false
    }
)

export default function Create() {
  const {data:session} = useSession()
  const [content, setContent]= useState("")
  const titulo= useRef()
  const image = useRef()
  const higthLigth = useRef()
  const categoria = useRef()

  const saveContent = ()=>{
    
    
     axios.post("/api/publicacion/create",{
      title: titulo.current.value,
      author:session.user,
      image:image.current.value,
      date: new Date(),
      highlight: higthLigth.current.checked,
      category: categoria.current.value,
      content

     }).then(res=>{
        Router.replace("/admin")
     }).catch(erorr=>{
       console.log(erorr)
     })
  }



  
  return (
    <AdminPage>
        <div className='p-5 bg-slate-200 text-black w-full'>

          <div className=' p-1'>
          <div className='flex gap-6 items-center '>
              <div className='flex flex-col my-3'>
                <label htmlFor="Titulo" > Titulo</label>
                <input type="text"  ref={titulo} className='w-60 '/>
              </div>

              <div className='flex flex-col my-3'>
                <label htmlFor="Titulo">Imagen</label>
                <input  type="text" ref={image} className='w-60 '/>
              </div>

              <div className='flex flex-col my-3'>
                  <label htmlFor="">Categoria</label>
                  <select ref={categoria} name="" id="" className=''>
                    <option value="Fotografia">Fotografia</option>
                    <option value="Astronomia">Astronomia</option>
                  </select>
              </div>

              <div className='flex flex-col my-3 items-center content-center'>
                <label htmlFor="Titulo"> Hiligth</label>
                <input id='highligth' ref={higthLigth} type="checkbox"  className=' '/>
              </div>
              
              <div className='flex items-center'>
              <button onClick={saveContent} className='bg-greenDark hover:w-24 rounded-md transition-all duration-75 w-20 h-7'>Crear</button>
              </div>
              
            </div>

          <div className='bg-white'  >

              <MarkDownEditor 
              height={500}

                value={content}
                  onChange={(editor, data, value)=>{
                    setContent(value)
                  }}
                  minHei
              />
              </div>
          </div>
          
        </div>
    </AdminPage>
  )
}
