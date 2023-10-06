import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const date = new Date().toUTCString().slice(5, 16)

  return (
    <section>
      <header className='p-6 bg-[#be123c] shadow sticky'>
        <nav className='flex justify-between items-center'>
          <div>
            <p className='text-white'>Welcome</p>
            <datetime className='text-white'>{date}</datetime>
          </div>
          <form className='h-10 border bg-white flex items-center px-2 py-1 rounded-md w-[40%] shadow'>
            <MdSearch className='w-6 h-6 text-gray-400' />
            <input className='outline-none w-full' type='search' placeholder='Search by profession, name, home ward' />
          </form>
        </nav>
      </header>
      <article className='p-6'>
        <table className='border border-solid w-full p-2'>
          <thead className='border border-solid'>
            <tr>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>First name</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Second name</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Phone number</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Age bracket</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Gender</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Profession</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Current location</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Home sub county</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Home ward</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Home village</th>
              <th className='border border-solid p-1 border-gray-300 text-gray-700 font-bold'>Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>Mkombozi</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>Sindani</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>0752468781</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>Male</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>18-25</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>Software Engineer</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>Nairobi</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>Westland</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>West ward</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>Doe Village</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>
                <Link> View profile</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default Dashboard