import React from 'react'
import Image from 'next/image';

import Wine2 from '../public/wine2.jpg';

const LandingPage = () => {
  return (
    <main className="flex min-h-screen items-center py-10">
      <div>
        <Image
          src={Wine2}
          alt='image'
          className='max-w-full h-auto rounded'
        />
      </div>
      <div className='flex flex-col ml-6'>
        <h1 className='text-center font-extrabold text-3xl mb-4'>Welcome to the wine management app</h1>
        <h3 className='text-center text-gray-400 mb-5'>Designed for wine enthusiasts to manage and organize their their personal collection of wines.</h3>
        <div className='flex justify-center gap-4 items-center'>
          <a href='/auth/login' className='w-20 border text-center border-white px-2 py-2 hover:bg-white hover:text-black rounded cursor-pointer transition '>Sign in</a>
          <a href='/auth/signup' className='w-20 border text-center border-white px-2 py-2 hover:bg-white hover:text-black rounded cursor-pointer transition '>Sign up</a>
        </div>
      </div>
    </main>
  )
}
  
  export default LandingPage