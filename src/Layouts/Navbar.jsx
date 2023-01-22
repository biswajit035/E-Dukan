import React from 'react'
import '../Style/css/main.css'
import logo from '../Assets/nav_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav_details">
        <div className="nav_logo">
          <img src={logo} alt="sastastore logo" />
          <FontAwesomeIcon icon={faBars} className='hamburger'/>
          <div className="title">SastaStore</div>
        </div>
        <div className="nav_acc">
          <div className="profile">
            <FontAwesomeIcon icon={faUser} />
            {/* <span className="text">User</span> */}
            <Link to="/auth"  className="text">User</Link>
          </div>
          <div className="profile">
            Seller
          </div>
          <div className="profile">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="text">User</span>
          </div>
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