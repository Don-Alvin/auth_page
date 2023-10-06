import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='p-10 h-screen grid justify-items-center content-center'>
        <img src='images/error.png' alt='error' />
        <aside className='w-[90%] lg:w-[50%] grid gap-4'>
            <p>Seems like the page you are looking for does not exist. Confirm the page details or navigate to home by clicking the button below</p>
            <Link className='p-2 text-white bg-[#be123c] rounded text-center' to='/'>Home</Link>
        </aside>
    </section>
  )
}

export default ErrorPage