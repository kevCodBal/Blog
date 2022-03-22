import React from 'react'
import {FaFacebookF ,FaInstagram, FaLinkedinIn}from 'react-icons/fa'

export default function About() {
  return (
    <div className='rounded-md h-96  shadow-lg  pt-3 text-black gap-3'>
            <div className='w-full justify-center flex gap-3 p-2 '>
              <div className='mb-4 overflow-hidden h-full object-bottom rounded-3xl w-1/2'>
                    <img src="https://images.unsplash.com/photo-1605298685825-e84df26c63c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className='w-full h-auto   object-bottom hover:object-bottom' alt="" />
              </div>
                      
              <div  className='text-black w-1/2 h-auto'>
                <h1 className='text-xl'>About ME</h1>
                  <p className='text-ellipsis overflow-hidden  text-justify'> Comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 lore.


                  </p>
              </div>

              

            </div>

            <div className='flex justify-end pr-2 gap-7'>
                    <FaFacebookF className='  bg-white hover:bg-lime-200'/>
                    <FaInstagram className='  bg-white hover:bg-lime-200'/>
                    <FaLinkedinIn className='  bg-white hover:bg-lime-200'/>
            </div>
    </div>
  )
}
