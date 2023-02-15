import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerBuyer } from '../store/buyersSlice'




const SignUp = (props) => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  

  const { data, status } = useSelector((state) => state.buyer);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }

  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault()
    const cred = {
      fname: e.target.fname.value, 
      lname: e.target.lname.value, 
      email: e.target.email.value, 
      password: e.target.password.value,
      isAdmin: window.location.pathname == "/admin/signup" ? true : false
    }
    // console.log(cred);
    dispatch(registerBuyer(cred))
  }

  

  return (
    <div className='signup'>
      <h1>{props.title}</h1>
      <form onSubmit={handleSubmit}>
      <label >First Name:</label>
        <input type="text" id='fname' placeholder='Enter Your First Name' /><br/>
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id='lname' placeholder='Enter Your Last Name' /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' placeholder='Enter Your Email' /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' placeholder='Enter Your password' /><br />
        <button type="submit">SignUp</button>
      </form>
      {!(window.location.pathname === '/admin') ? <Link to="/auth" className="createacc">Continue to Login</Link> :""}
    </div>
  )
}

export default SignUp