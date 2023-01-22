import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../Layouts/Login'
import SignUp from '../Layouts/SignUp'

const Auth = () => {
  return (
    <div className='auth'>
      <div className="container">
        <Outlet/>
      </div>



    </div>
  )
}

export default Auth
