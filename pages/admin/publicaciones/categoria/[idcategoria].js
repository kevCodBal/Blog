import axios from 'axios'
import React from 'react'
import Categoria from '../../../Categoria'
import ContentPublicacion from '../../../../components/ContentPublicaciones'

export async function getServerSideProps(context){
  const secure = context.req.connection.encrypted
 
  const url = `${secure?"https":"http"}://${context.req.headers.host}/api/publicacion/categoria/${context.params.idcategoria}`
 
  
  const res = await axios.get(url)
  
  
  return {
      props:{
          posts:res.data,
          nombre:context.params.idcategoria,
          categoria: true
      }
  }
}


export default function CategoriaPublicacion({posts, nombre, categoria}) {
  console.log(posts)
  return (
    <Categoria>

        <div className='text-black'>
          <h1 className='text-xl text-center mt-3'>{nombre}</h1>
          <ContentPublicacion posts={posts} card={true} categoria={categoria}/>
        </div>
    </Categoria>

    
  )
}
