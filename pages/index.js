import axios from "axios";
import About from "../components/About";
import ContentPublicaciones from "../components/ContentPublicaciones";

import PostHome from "../components/PostHome";
export async function getServerSideProps(context){
  const secure = context.req.connection.encrypted 

  const url = `${secure?"https":"http"}://${context.req.headers.host}/api/publicacion/higlith`
  console.log(url)
  const respuesta = await axios.get(url)
  
  
  
  return{
    props:{
      posts:respuesta.data

    }
    
  }

  
}


export default function Home({posts}) {

  
  return (
    <div className=" h-full">

      <div className="w-45  bg-orange-500 h-96">
        

        <div className="w-full bg-green-500 h-96 hover: overflow-hidden">
            <img className="w-full h-auto object-contain hover:object-left-top" src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1507&q=80"/>
        </div>
      </div>

      <div className="flex my-4 border-amber-50 border ">
          <div className="w-2/3  flex flex-col  gap-4 p-5">
                <ContentPublicaciones posts={posts}/>
                
          </div>

          <div className="shadow-sm w-1/3  flex flex-col gap-3 p-3">
            
            <About/>
            <div className='border h-96 border-slate-900 flex flex-col gap-3 p-4'>
              <h2>Popular Post</h2>
               
                <ContentPublicaciones posts={posts} popular={true}/>
                
            </div>
            
          </div>
      </div>
      
    </div>
  )
}
