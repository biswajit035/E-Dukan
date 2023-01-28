import React, { Component, useEffect, useState } from 'react'
import '../Style/css/main.css'
import logo from '../Assets/nav_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopHouse, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUser } from '../store/userSlice';





const Navbar = () => {

    const dispatch = useDispatch()


  // const { data, status } = useSelector((state) => state.buyer);
  const { data, status } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    isAdmin: "false",
    fname: "User"
  })


  const handleLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('fname');
    localStorage.removeItem('lname');
    localStorage.removeItem('isAdmin');
    window.location.reload();
  }

  useEffect(() => {
    if(localStorage.getItem('token'))
      dispatch(fetchUser(localStorage.getItem('token')))
    if(data.fname) setUser(data)
    // console.log("navbar logged");
  }, [])

  

  

  return (
    <div className='navbar'>
      
      <div className="nav_details">
        <div className="nav_logo">
          {
            data.isAdmin ?
            <span >Admin</span>
            :
             <img src={logo} alt="sastastore logo" /> 
          }
          <FontAwesomeIcon icon={faBars} className='hamburger'/>
          <div className="title">SastaStore</div>
        </div>
        <div className="nav_acc">
          <Link to="/auth" className="profile">
            <FontAwesomeIcon icon={faUser} />
            <span className="text">{ data.fname ? data.fname : "User"}</span>
          </Link>
          <div className="profile">
            Seller
          </div>
          <div className="profile">
            <FontAwesomeIcon icon={faCartShopping} />
            <span >Cart</span>
          </div>
          { localStorage.getItem('token') ? <div className="profile" onClick={handleLogout}>
            <FontAwesomeIcon icon={faPowerOff} />
          </div> : ""}
        </div>
      </div>

      <div className="ts">
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className='faSearch'></FontAwesomeIcon>
          <input type="text" name="" id="" />
        </div>
      </div>

    </div>
  )
}

export default Navbar