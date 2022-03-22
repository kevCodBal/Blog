import axios from 'axios'
import React from 'react'
import  ReactMarkdown from 'react-markdown'
import AddComentary from '../../../components/addComentary'
import Coments from '../../../components/Coments'


export async function getServerSideProps(context){
  const secure = context.req.connection.encrypted
  const url = `${secure?"https":"http"}://${context.req.headers.host}/api/publicacion/${context.params.idPublicacion}`
  
  
  const res= await axios.get(url)
  // console.log(res.data)

  return{
    props:{
      publicacion: res.data,
      id: context.params.idPublicacion
    }
  }
}

export default function Publicacion({publicacion, id}) {
  //  console.log(publicacion.postOnly)
  // console.log(id)
  return (
    <div className='w-2/4 prose prose-xl left-24 p-7 gap-3 text-black mx-auto'>
      <div className='flex justify-center '>
         <h1 className='text-3xl text-center pb-4'>{publicacion.postOnly?.title}</h1> 
      </div>
        <ReactMarkdown >{publicacion.postOnly?.content}</ReactMarkdown> 
        <h1 className='text-center p-5 text-xl'>Comentarios</h1>
      {
        
        publicacion.comentarios.map((comet, index)=>(
          <div>
            
            <Coments key={index} coment={comet}/>
           
          </div>
          
        ))
      }

     <AddComentary idPublicacion={id} />
      

    </div>

  )
}
