import React from 'react'
import { Link, useParams } from 'react-router-dom'
import  useUsers  from '../Features/Users/hooks/useUsers'

const Profile = () => {
  const { id } = useParams()

  const {users, error, isLoading, isError } = useUsers()

  const user = users.filter(user => user.id === Number(id))
  console.log(user);

  return (
    <section className='p-10 flex justify-center'>
      <div className='flex flex-col gap-6 shadow p-6 rounded-lg'>
        <img src='images/profile.svg' alt='profile' />
        <div className='flex flex-col gap-4'>
          <div>
            <span className='text-[18px] font-bold text-gray-700'>Name:</span> <span className='text-[18px] font-medium text-gray-700'>Mkombozi Sindani</span>
          </div>
          <div>
            <span className='text-[18px] font-bold text-gray-700'>Phone number:</span> <span className='text-[18px] font-medium text-gray-700'>0752487965</span>
          </div>
          <div>
            <span className='text-[18px] font-bold text-gray-700'>Gender:</span> <span className='text-[18px] font-medium text-gray-700'>Male</span>
          </div>
          <div>
            <span className='text-[18px] font-bold text-gray-700'>Age group:</span> <span className='text-[18px] font-medium text-gray-700'>18-25</span>
          </div>
          <div>
            <span className='text-[18px] font-bold text-gray-700'>Profession:</span> <span className='text-[18px] font-medium text-gray-700'>Software Engineer</span>
          </div>
          <div>
            <span className='text-[18px] font-bold text-gray-700'>Current location:</span> <span className='text-[18px] font-medium text-gray-700'>Nairobi</span>
          </div>
          <div>
            <span className='text-[18px] font-bold text-gray-700'>Home Subcounty:</span> <span className='text-[18px] font-medium text-gray-700'>Westlands</span>
          </div>
          <div>
            <span className='text-[18px] font-bold text-gray-700'>Home Ward:</span> <span className='text-[18px] font-medium text-gray-700'>West ward</span>
          </div>
          <div>
            <span className='text-[18px] font-bold text-gray-700'>Home Village:</span> <span className='text-[18px] font-medium text-gray-700'>Doe Village</span>
          </div>
        </div>
        <Link to='/mydetails' className='bg-[rgb(14,141,69)] text-white p-2 rounded text-center'>Edit your details</Link>
      </div>
      
    </section>
  )
}

export default Profile