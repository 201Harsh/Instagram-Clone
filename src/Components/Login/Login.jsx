import React, { useState } from 'react'

const Login = ({ loginHandler }) => {
  const [USerName, setUSerName] = useState('')
  const [Password, setPassword] = useState('')
  const FormHandler = e => {
    e.preventDefault()
    setUSerName('')
    setPassword('')
    loginHandler(USerName, Password)
  }
  return (
    <div className='h-screen w-full'>
      <div className='flex justify-center flex-col items-center h-full'>
        <div className='w-4/5 border-2 border-black p-8 flex flex-col gap-6'>
          <h1 className='text-4xl log text-center'>Instagram</h1>
          <form
            className='h-full w-full flex flex-col gap-5'
            onSubmit={FormHandler}
          >
            <input
              type='text'
              placeholder='Username'
              className='h-1/2 w-full border-2 border-black bg-transparent outline-none p-5 font-semibold text-lg'
              required
              value={USerName}
              onChange={e => setUSerName(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              className='h-1/2 w-full border-2 border-black bg-transparent outline-none p-5 font-semibold text-lg'
              required
              value={Password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type='submit'
              className='h-1/3 w-1/2 bg-sky-400 text-white font-semibold text-base outline-none p-5 active:scale-90 transition-all ease-in-out duration-300'
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
