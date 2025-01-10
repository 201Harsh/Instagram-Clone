import React from 'react'
import { getLocalStorage } from '.././Utils/LocalStorage'

const Posts = () => {
  const Users = getLocalStorage('users')
  const LoginUser = localStorage.getItem('loginUser')
  if (LoginUser) {
    const user = Users.find(user => user.username == LoginUser)
    const post = Users.find(user => user.username == LoginUser).posts
    return (
      <div className='w-full mt-10 flex flex-col gap-10'>
        <div className='h-24 w-full'>
          <div className='h-full w-full flex justify-evenly items-center gap-2 flex-wrap'>
            {Array.from({ length: post }).map((_, index) => (
              <div className='h-[100%] w-[25%] bg-sky-800' key={index}></div>
            ))}
            {post == 0 && (
              <p className='text-center text-2xl font-semibold mt-32'>
                No posts Yet...
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Posts
