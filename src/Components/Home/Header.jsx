import React from 'react'

const Header = () => {
  const LogouHandler = () => {
    localStorage.removeItem('loginUser')
    window.location.reload()
  }
  return (
    <div className='h-18 w-full mt-2 mb-2'>
      <div className='flex justify-between items-center h-full p-4'>
        <h1 className='text-3xl font-[600] flex items-center gap-2 log'>
          {localStorage.getItem('loginUser')} 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </h1>
        <button onClick={LogouHandler} className='bg-red-600 text-white font-semibold py-3 px-6 rounded-lg active:scale-90 transition-all ease-in-out duration-200'>
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header
