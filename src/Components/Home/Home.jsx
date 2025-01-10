import React from 'react'
import Header from './Header'
import Profile from './Profile'
import BioInstagram from './BioInstagram'
import HighLights from './HighLights'
import Posts from './Posts'

const Home = () => {
  return (
    <div className='h-screen w-full'>
      <Header />
      <Profile />
      <BioInstagram />
      <HighLights />
      <Posts />
    </div>
  )
}

export default Home