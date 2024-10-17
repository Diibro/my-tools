'use client';
import React from 'react'
import {signIn} from 'next-auth/react';

const page = () => {
     return (
          <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
               <div  className="w-[40%]  py-[40px] shadow-md rounded-sm shadow-gray-400 flex flex-col items-center p-[10px] gap-[10px] justify-center">
                    <h3>Login</h3>
                    <div onClick={() => signIn('google') } className='w-[80%] cursor-pointer bg-blue-500 flex items-center  justify-start rounded-[5px] p-[5px] '> 
                         <p className=' text-white text-[0.8rem] font-bold'>Continue With Google</p> 
                    </div>
                    <div onClick={() => signIn('apple') } className='w-[80%] cursor-pointer bg-gray-600 flex items-center  justify-start rounded-[5px] p-[5px] '> 
                         <p className=' text-white text-[0.8rem] font-bold'>Continue With Apple</p>
                    </div>
                    <div onClick={() => signIn('azure-ad') } className='w-[80%] cursor-pointer bg-gradient-to-r from-red-500 via-orange-400 to-green-600  justify-start rounded-[5px] p-[5px] '> 
                         <p className=' text-white text-[0.8rem] font-bold'>Continue With Microsoft</p> 
                    </div>
                    <div onClick={() => signIn('facebook') } className='w-[80%] cursor-pointer bg-blue-500 flex items-center  justify-start rounded-[5px] p-[5px] '> 
                         <p className=' text-white text-[0.8rem] font-bold'>Continue With Facebook</p> 
                    </div>
               </div>
          </div>
     )
}

export default page