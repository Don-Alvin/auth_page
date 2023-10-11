import React from 'react'
import Background from '../Components/Background'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
        <Background />
        <section className='flex flex-col gap-6 h-screen w-full items-center text-white py-[200px]'>
            <header>
                <h1 className='text-3xl font-bold'>Welcome to our Portal</h1>
            </header>
            <main className='flex flex-col gap-6 items-center'>
                <h3 className='text-xl font-semibold'>Log in into your account to view and update your profile</h3>
                <Link to='/login' className='text-[rgb(14,141,69)] rounded bg-white p-2 md:w-[40%] flex justify-center'>
                    <span className=''>Log in</span>
                </Link>
            </main>
        </section>
    </div>
  )
}

export default Welcome