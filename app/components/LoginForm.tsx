"use client"

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const inputStyle = "w-full p-2 text-gray-600 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
const loginForm = () => {

    const router = useRouter();
    const { status } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const submitHandler = async () => {
        setMessage('Signing in ....');

        try {
            const signInResponse = await signIn('credentails', {
                email,
                password,
                redirect: false,
            })

            if(!signInResponse || signInResponse.ok !== true) {
                setMessage('Invalid credentials');
            } else {
                router.refresh();
            }
        } catch (err) {
            console.log(err);
        }
        setMessage(message);
    };

    useEffect(() => {
        if (status === 'authenticated') {
            router.refresh();
            router.push('/');
        }
    }, [status]);


  return (
    <main className="flex items-center justify-center min-h-screen">
        <div className='relative flex flex-col m-6 space-y-8 border shadow-2xl rounded-2xl'>
          <div className='flex flex-col justify-center p-8'>
            <span className='mb-3 text-4xl text-center text-white font-bold'>Welcome Back</span>
            <span className='font-light text-gray-400 mb-8'>
              Welcome back - Please enter your details
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
            <button 
              className='w-full p-2 cursor-pointer border border-white hover:bg-white hover:text-black rounded-lg transition'>
                Sign in
            </button>
            <p>{message}</p>
          </div>
        </div>
    </main>
  )
}

export default loginForm