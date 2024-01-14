"use client"

import React, { useState } from 'react'
import { signUp } from '../actions/users/signUp';

const inputStyle = "w-full p-2 text-gray-600 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = async () => {
        setMessage("Signing up..........");
        const message = await signUp(email, password)
        setMessage(message);
    }



  return (
    <main className="flex items-center justify-center min-h-screen">
    <div className='relative flex flex-col m-6 space-y-8 border shadow-2xl rounded-2xl'>
      <div className='flex flex-col justify-center p-8'>
        <span className='mb-3 text-4xl text-center text-white font-bold'>Welcome</span>
        <span className='font-light text-gray-400 mb-8'>
          Register here to get access to the platform
        </span>
        <div className='py-4'>
          <span className='mb-2 text-md'>Email</span>
          <input 
            value={email} onChange={(e) => setEmail(e.target.value)}
            type='text' 
            className={inputStyle}
            name='email'
            id='email'
          />
        </div>
        <div className='py-2'>
          <span className='mb-2 text-md'>Password</span>
          <input 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            type='text' 
            className={inputStyle}
            name='email'
            id='email'
          />
        </div>
        <button onClick={submitHandler}
          className='w-full p-2 cursor-pointer border border-white hover:bg-white hover:text-black rounded-lg transition'>
            Sign up
        </button>
        <p>{message}</p>
      </div>
    </div>
</main>
  )
}

export default SignUpForm