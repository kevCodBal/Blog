import React from 'react'
import Admin from './Admin'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Page({children}) {

  return (<div className='min-h-screen  flex flex-col bg-blueDark justify-center'>
        <Navbar/> 
        
        <main className=' bg-white text-white   w-11/12 mx-auto my-6 h-full '>
         {children}
        </main>


        
        <Footer/>
    </div>
  )
}
