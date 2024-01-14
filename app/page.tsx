import React from 'react'

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Landing page</h1>
      <a href='/login' className='cursor-pointer border border-white px-4 py-2 hover:bg-white hover:text-black rounded'>Login</a>
    </main>
  )
}
  
  export default LandingPage