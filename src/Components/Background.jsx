import React from 'react'

const Background = () => {
  return (
    <div className='h-screen w-full bg-[url("images/main.png")] bg-center absolute inset-0 z-[-10]'>
        <div className='h-screen w-full bg-[rgb(14,141,69)] opacity-90'></div>
    </div>
  )
}

export default Background