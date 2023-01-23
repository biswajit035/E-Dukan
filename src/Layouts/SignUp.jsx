import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup'>
      <h1>Create Account</h1>
      <form action="#">
      <label htmlFor="fname">First Name:</label>
        <input type="text" id='fname' placeholder='Enter Your First Name' />&nbsp;
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id='email' placeholder='Enter Your Last Name' /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' placeholder='Enter Your Email' /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' placeholder='Enter Your password' /><br />
        <button type="submit">SignUp</button>
      </form>
      <Link to="/auth" className="createacc">Continue to Login</Link>
    </div>
  )
}

export default SignUp