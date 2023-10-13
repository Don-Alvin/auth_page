import React from 'react'
import { MdSearch } from 'react-icons/md'
import useUsers from '../Features/Users/hooks/useUsers'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import useSearch from '../hooks/useSearch'

const Dashboard = () => {

  const {searchWord, setSearchWord } = useSearch()
  const date = new Date().toUTCString().slice(5, 16)
  const { users, isLoading, isError, error } = useUsers()
  
  let content;

  if (isLoading) content = <BeatLoader color='rgb(14,141,69)' />
  if (isError) toast.error(error) 

  if(users) {
    const renderedUsers = users?.filter(user => {
      return Object.values(user).some(value =>
        typeof value === 'string' && value.includes(searchWord)
      );
    });
    content = (
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
          {renderedUsers.map(user => (
          <tbody key={user.id}>
            <tr>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.first_name}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.last_name}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.phone_number}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.gender}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.age_bracket}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.professional}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.current_location}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.home_sub_county}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.home_ward}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>{user.home_village}</td>
              <td className='border border-solid border-gray-300 text-center p-1 text-gray-700'>
                <Link to={`/${user.id}`} className='font-semibold underline'> View profile</Link>
              </td>
            </tr>
          </tbody>
          ))}
        </table>
    )
  } else if (!isLoading && !isError) {
    content = <p>No user available</p>
  }

  return (
    <section>
      <header className='p-6 bg-[rgb(14,141,69)] shadow sticky'>
        <nav className='flex justify-between items-center'>
          <div>
            <p className='text-white'>Hello</p>
            <time dateTime={date} className='text-white'>{date}</time>
          </div>
          <div className='h-10 border bg-white flex items-center px-2 py-1 rounded-md w-[40%] shadow'>
            <MdSearch className='w-6 h-6 text-gray-400' />
            <input
              className='outline-none w-full' 
              type='search' 
              placeholder='Search by profession, name, home ward'
              onChange={(e) => setSearchWord(e.target.value)}
              value={searchWord}
            />
          </div>
        </nav>
      </header>
      <article className='p-2'>
      {content}
      </article>
      
    </section>
  )
}

export default Dashboard