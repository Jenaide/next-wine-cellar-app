import React from 'react'

const editButton = 'cursor-pointer border border-white px-2 py-1 hover:bg-white hover:text-black rounded transition'

const Home = () => {
  return (
    <main className='min-h-screen border rounded border-gray-500 p-4'>
      <div className='flex justify-between'>
        <h1 className='text-4xl font-extrabold px-10 py-5'>My Wine List</h1>
        <a href='/auth/signout' className="cursor-pointer border border-white py-6 px-4 hover:bg-white hover:text-black rounded transition">Logout</a>
      </div>
      <div className="container mx-auto py-10">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Year</th>
            <th className="py-2 px-4 border-b text-left">Type</th>
            <th className="py-2 px-4 border-b text-left">Varietal</th>
            <th className="py-2 px-4 border-b text-left">Consumed</th>
            <th className="py-2 px-4 border-b text-left">Date Consumed</th>
            <th className="py-2 px-4 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b text-left">Wine 1</td>
            <td className="py-2 px-4 border-b text-left">2021</td>
            <td className="py-2 px-4 border-b text-left">Red</td>
            <td className="py-2 px-4 border-b text-left">Cabernet Sauvignon</td>
            <td className="py-2 px-4 border-b text-left">Yes</td>
            <td className="py-2 px-4 border-b text-left">2021-01-01</td>
            <td className="py-2 px-4 border-b text-left"><a className={editButton}>Edit</a></td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b text-left">Wine 2</td>
            <td className="py-2 px-4 border-b text-left">2020</td>
            <td className="py-2 px-4 border-b text-left">White</td>
            <td className="py-2 px-4 border-b text-left">Chardonnay</td>
            <td className="py-2 px-4 border-b text-left">No</td>
            <td className="py-2 px-4 border-b text-left">N/A</td>
            <td className="py-2 px-4 border-b text-left"><a className={editButton}>Edit</a></td>
          </tr>
        </tbody>
      </table>
      </div>

    </main>
  )
}
  
  export default Home