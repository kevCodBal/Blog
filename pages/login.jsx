import React from 'react'
import {getCsrfToken} from 'next-auth/react'
import {AiFillGithub, AiFillGoogleCircle} from 'react-icons/ai'

export async function getServerSideProps(context){
    const csrfToken = await getCsrfToken(context)
        console.log(csrfToken)

        return{
            props: {csrfToken}
        }
}

export default function Login({csrfToken}) {
  return (
    <div className=' p-11'>
         <form className='flex justify-center mb-5' action='/api/auth/signin/github'  method='post'>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <button className='bg-slate-900 p-3 rounded hover:bg-greenDark hover:text-black' type='submit'><AiFillGithub/>Inicio de sesion con GitHub</button>
        </form> 
        <form className='flex justify-center' action="api/auth/signin/google"method='post'>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <button className='bg-slate-900 p-3 rounded hover:bg-greenDark hover:text-black' type='submit'><AiFillGoogleCircle/>Inicio de sesion con Google</button>
        </form> 
    </div>
  )
}


