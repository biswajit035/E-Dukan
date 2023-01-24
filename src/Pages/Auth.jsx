import React from 'react'
import { Outlet } from 'react-router-dom'

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
