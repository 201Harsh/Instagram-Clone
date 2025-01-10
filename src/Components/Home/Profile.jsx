import React, { useRef } from 'react'
import { getLocalStorage } from '.././Utils/LocalStorage'

const Profile = () => {
  const Users = getLocalStorage('users')
  const LoginUser = localStorage.getItem('loginUser')
  if (LoginUser) {
    const user = Users.find(user => user.username == LoginUser)
    const Dp = Users.find(user => user.username == LoginUser).profile_image
    return (
      <div className='h-32 w-full mb-8'> 
        <div className='h-full w-full flex justify-between items-center gap-6 p-2'>
          <div className='h-full w-1/4 flex justify-center items-center'>
          <div
              className="h-[100px] w-[100px] rounded-full"
              style={{
                backgroundImage: `url(${Dp})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className='h-full w-3/4'>
          <div className=' h-full w-full flex justify-evenly items-center gap-8'>
              <div>
              <h4 className='text-sm font-normal'>{user.posts}</h4>
              <h3 className='text-base font-medium'>Posts</h3>
              </div>
              <div>
              <h4 className='text-sm font-normal'>{user.followers}</h4>
              <h3 className='text-base font-medium'>Followers</h3>
              </div>
              <div>
              <h4 className='text-sm font-normal'>{user.following}</h4>
              <h3 className='text-base font-medium'>Following</h3>
              </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
