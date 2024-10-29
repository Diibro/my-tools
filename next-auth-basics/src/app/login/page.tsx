'use client';
import React from 'react'
import {signIn} from 'next-auth/react';
import Link from 'next/link';

const page = () => {
     return (
          <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
               <Link className='text-blue-500 text-[1rem] font-bold ' href={'/camera'} >Camera</Link>
               <div  className="w-[80%] md:w-[60%] lg:w-[40%] py-[40px] shadow-md rounded-sm shadow-gray-400 flex flex-col items-center px-[20px]  gap-[10px] justify-center">
                    <h3 className='text-gray-600 text-[1.6rem] font-bold ' >Login</h3>
                    <p className='text-gray-500 text-[0.9rem] '>Welcome ,greetings from Dushime Brother</p>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] mx-auto'>
                         <div onClick={() => signIn('google') } className='cursor-pointer bg-blue-500 flex items-center w-auto justify-start rounded-[5px] p-[5px] '> 
                              <p className='text-[0.8rem] font-mono font-bold  text-center text-gray-50 '>Continue With Google</p> 
                         </div>
                         <div onClick={() => signIn('apple') } className='w-auto px-[5px] py-[10px] cursor-pointer bg-gray-600 flex items-center  justify-center rounded-[5px] p-[5px] '> 
                              <p className='text-[0.8rem] font-mono font-bold  text-center text-gray-50 '>Continue With Apple</p>
                         </div>
                         <div onClick={() => signIn('azure-ad') } className='w-auto px-[5px] py-[10px] cursor-pointer bg-gradient-to-r from-red-500 via-orange-400 to-green-600  justify-center rounded-[5px] p-[5px] '> 
                              <p className='text-[0.8rem] font-mono font-bold  text-center text-gray-50 '>Continue With Microsoft</p> 
                         </div>
                         <div onClick={() => signIn('facebook') } className='w-auto px-[5px] py-[10px] cursor-pointer bg-blue-500 flex items-center  justify-center rounded-[5px] p-[5px] '> 
                              <p className='text-[0.8rem] font-mono font-bold  text-center text-gray-50 '>Continue With Facebook</p> 
                         </div>
                    </div>
                    
               </div>
          </div>
     )
}

export default page