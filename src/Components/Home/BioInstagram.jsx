import React from 'react'
import { getLocalStorage } from '../../Components/Utils/LocalStorage'

const BioInstagram = () => {
  const Users = getLocalStorage('users')
  const LoginUser = localStorage.getItem('loginUser')
  if (LoginUser) {
    const user = Users.find(user => user.username == LoginUser)
    return (
      <div className='h-52 w-full'>
        <div className='h-full w-full flex flex-col justify-center items-start p-4 gap-3 font-semibold'>
          <h3 className='text-xl font-bold'>{LoginUser}</h3>
          <h2>{user.tech_profession}</h2>
          <h4>{user.bio}</h4>
          <h5>
            {user.interests.map((interest, index) => (
              <span key={index}>{interest}</span>
            ))}
          </h5>
        </div>
      </div>
    )
  }
}

export default BioInstagram
