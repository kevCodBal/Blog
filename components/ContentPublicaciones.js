import axios from 'axios'
import React from 'react'
import PostHome from './PostHome'





export default function ContentPublicaciones({posts, card, categoria, popular}) {
    
  return (
    <div className={`${card&& 'grid-cols-4 gap-3'} ${popular&&'h-8'} ${categoria&&'grid-cols-3 gap-2'} h-full p-3 rounded-md grid gap-4 ${!card&&'gap-4 flex-col'}  `}>
        {
          posts?.map((publicacion, index)=> <PostHome key={index} idPublicacion={publicacion.id} card={card} publicacion={publicacion} categoria={categoria} popular={popular} />)
        }
    </div>
  )
}
