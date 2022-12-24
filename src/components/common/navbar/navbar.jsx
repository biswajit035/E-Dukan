import React from 'react'
import './navbar.css'
import logo from '../../../Assests/icon.png'
import search from '../../../Assests/search.png'
const navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo company" className='navbar_logo' />
      
      <div className="navbar_search_container">
          <input type="text" placeholder="Search.." name="search" className='navbar_search_input' autocomplete="off" />
          <button type="submit" className='navbar_searchbtn'><img src={search} alt="" className='navbar_search_icon'/></button>
      </div>

      <ul>
        <li>Profile</li>
      </ul>
    </nav>
  )
}

export default navbar