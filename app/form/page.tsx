import React from 'react'

const inputStyle = "w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"

const Form = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-15">
        <div className='relative flex flex-col m-6 space-y-8 border shadow-2xl rounded-2xl'>
          <div className='flex flex-col justify-center p-8'>
            <span className='mb-3 text-4xl text-center text-white font-bold'>Add/Edit Wine</span>
            <span className='font-light text-center text-gray-400 mb-8'>
              Add or customize your wine list here
            </span>
              <form>
                <div className='mb-3'>
                  <label htmlFor='name' className='block text-gray-200 text-sm font-bold mb-2'>Name:</label>
                  <input 
                      type='text' 
                      id='name'
                      name='name'
                      className='w-full px-3 py-2 border rounded-md text-black'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='year' className='block text-gray-200 text-sm font-bold mb-2'>Year:</label>
                  <input 
                      type='text' 
                      id='year'
                      name='year'
                      className='w-full px-3 py-2 border rounded-md text-black'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='type' className='block text-gray-200 text-sm font-bold mb-2'>Type:</label>
                  <select id='type' name='type'
                    className='w-full px-3 py-2 border rounded-md text-gray-500'
                  >
                    <option value='red'>Red</option>
                    <option value='white'>White</option>
                    <option value='rosé'>Rosé</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='varietal' className='block text-gray-200 text-sm font-bold mb-2'>Varietal:</label>
                  <select id='varietal' name='type'
                    className='w-full px-3 py-2 border rounded-md text-gray-500'
                  >
                    <option value='cabernet'>Cabernet Sauvignon</option>
                    <option value='merlot'>Merlot</option>
                    <option value='shiraz'>Shiraz</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='consumed' className='block text-gray-200 text-sm font-bold mb-2'>Consumed:</label>
                  <select id='consumed' name='type'
                    className='w-full px-3 py-2 border rounded-md text-gray-500'
                  >
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='consumed' className='block text-gray-200 text-sm font-bold mb-2'>Date Consumed:</label>
                  <input 
                    type='date'
                    id='dateConsumed'
                    name='dateConsumed'
                    className='w-full px-3 py-2 border rounded-md text-gray-500'
                  />
                </div>
                <div className='mt-4'>
                  <button type='submit' className='bg-gray-400 text-white px-4 py-2 rounded-md last:hover:bg-slate-600'>Submit</button>
                </div>
            </form>
          </div>
        </div>
    </main>
  )
}

export default Form