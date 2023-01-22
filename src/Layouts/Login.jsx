import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <form action="#">
        <label htmlFor="email">Email:</label>
        <input type="email" id='email'placeholder='Enter Your Email'/><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id='password'placeholder='Enter Your password'/><br />
        <button type="submit">Login</button>
      </form>
      <Link to="signup" className="createacc">Create an Account</Link>
    </div>
  )
}

export default Login
