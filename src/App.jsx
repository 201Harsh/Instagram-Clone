import React, { useEffect, useState } from 'react'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import {
  getLocalStorage,
  setLocalStorage
} from './Components/Utils/LocalStorage'

const App = () => {
  // localStorage.clear()
  setLocalStorage()
  const data = getLocalStorage('users')
  const [LoginUser, setLoginUser] = useState('')
  const [User, setUser] = useState('')
  const loginHandler = (username, password) => {
    if (data.find(user => user.username == username)) {
      if (data.find(user => user.password == password)) {
        setUser(username)
        setLoginUser(username)
        localStorage.setItem('loginUser', username)
      }
    } else {
      alert('Credentials not matched')
    }
  }

  useEffect(() => {
    const login = localStorage.getItem('loginUser')
    if (login) {
      setUser(login)
    }
  }, [])
  return (
    <>
      {!User ? <Login loginHandler={loginHandler} /> : ''}
      {User ? <Home /> : ''}
    </>
  )
}

export default App
