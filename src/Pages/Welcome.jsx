import React from 'react'
import Background from '../Components/Background'
import { Link } from 'react-router-dom'
import useAuth from '../Features/Auth/hooks/useAuth'

const Welcome = () => {
    const { auth, setAuth } = useAuth()
    console.log(auth.user);
  return (
    <div>
        <Background />
        <section className='flex flex-col gap-6 h-screen w-full items-center text-white py-[200px] px-10'>
            <header>
                {auth.user ? (
                    <h1 className='text-3xl font-bold text-center'>Welcome {auth.user.email}</h1>
                ) : (
                    <h1 className='text-3xl font-bold text-center'>Welcome to our Portal</h1>
                )}
                
            </header>
            <main className='flex flex-col gap-6 items-center'>
                {auth.user ? (
                    <div className='flex flex-col items-center gap-2'>
                      <div className='flex gap-3'>
                       <Link to={`/${auth.user.id}`} className='text-[rgb(14,141,69)] rounded bg-white p-2  flex justify-center'>
                            <span className=''>View your profile</span>
                        </Link>
                        <Link to={`/mydetails`} className='text-[rgb(14,141,69)] rounded bg-white p-2 flex justify-center'>
                            <span className=''>Update your data</span>
                        </Link> 
                    </div>
                    <div>
                         <button onClick={() => setAuth({})} className='text-[rgb(14,141,69)] rounded bg-white p-2  flex justify-center'>
                            Log out
                        </button>
                    </div>   
                    </div>
                    
                ): (
                    <div className='flex flex-col items-center'>
                       <h3 className='text-xl font-semibold text-center'>Log in into your account to view and update your profile</h3>
                        <Link to='/login' className='text-[rgb(14,141,69)]  rounded bg-white p-2 md:w-[40%] flex justify-center'>
                            <span className=''>Log in</span>
                        </Link>  
                    </div>
                   
                )}
                
            </main>
        </section>
    </div>
  )
}

export default Welcome