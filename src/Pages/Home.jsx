import React from 'react'
import Navbar from "../Layouts/Navbar"
import '../Style/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Catagory } from '../Layouts/Catagory'
import { Banner } from '../Layouts/Banner'
import { Omg } from '../Layouts/Omg'
import Foods from '../Layouts/Foods'
import Electronic from '../sass/layout/Electronic'
// import '@fortawesome/fontawesome-svg-core/styles.css';




const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Catagory/>
      <Banner/>
      <Omg/>
      <Foods/>
      <Electronic/>

    </div>
  )
}

export default Home