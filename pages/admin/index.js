import axios from 'axios'
import React from 'react'
import AdminPage from '../../components/AdminPage'
import PostHome from '../../components/PostHome'
import Content from '../../components/ContentPublicaciones'

export async function getServerSideProps(context){
  const secure = context.req.connection.encrypted
    
  const url = `${secure?"https":"http"}://${context.req.headers.host}/api/publicacion/All`
  console.log(url)
  const res = await axios.get(url)
  // console.log(res.data)
  return {
      props:{
          posts:res.data
      }
  }
}

export default function Admin({posts}) {
    
  return (
    <AdminPage >
        <h1 className='text-center text-2xl m-3 pt-3 pb-3 '>Mis Post</h1>
        <div className='pb-4'>
           <Content posts={posts} card={true}/>
        </div>
       
    </AdminPage>
  )
}
