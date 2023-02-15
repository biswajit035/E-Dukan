import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { Link, useNavigate } from 'react-router-dom'
import { loginBuyer } from '../store/buyersSlice'



const Login = (props) => {

const dispatch = useDispatch()
const navigate = useNavigate();


  const { data, status } = useSelector((state) => state.buyer);

  useEffect(() => {
  //   console.log(data);
    if (localStorage.getItem('token')) {
      navigate('/')
      }
  //   if(data.status == 'warn')
  //     {
  //     toast.warn(data.msg, {
  //       pauseOnHover: false,
  //     });
  //     }
  //   if(data.status == 'success')
  //     {
  //     toast.success(data.msg, {
  //       pauseOnHover: false,
  //     });
  //     // navigate('/')
  //     }
  }, [data])
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    const cred ={
      email: e.target.email.value,
      password: e.target.password.value,
      
    }
    dispatch(loginBuyer(cred))
    
  }
  return (
    <div className='login'>
  
      <h1>{props.title}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email'placeholder='Enter Your Email' required/><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id='password'placeholder='Enter Your password' required/><br />
        <button type="submit">Login</button>
      </form>
      <Link to="signup" className="createacc">Create an Account</Link>
    </div>
  )
}

export default Login
