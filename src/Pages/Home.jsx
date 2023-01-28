import React from 'react'
import Navbar from "../Layouts/Navbar"
import '../Style/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Catagory } from '../Layouts/Catagory'
import { Banner } from '../Layouts/Banner'
import { Omg } from '../Layouts/Omg'
import Foods from '../Layouts/Foods'
import Card from '../components/Card'
// import '@fortawesome/fontawesome-svg-core/styles.css';
import Product from '../Layouts/Product'




const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      {/* <Catagory/>
      <Banner/> */}
      {/* <Omg link='https://fakestoreapi.com/products' /> */}
      {/* <Foods title="Buy Foods, Toys and More" link='https://fakestoreapi.com/products' />
      <Foods title="Electronics and electrical" link='https://fakestoreapi.com/products' />
      <Foods title="Grocery and more " link='https://fakestoreapi.com/products' /> */}

      <Product 
      image="https://cdn.shopify.com/s/files/1/0263/2912/0813/products/p8.jpg"
      title="Buckle Wrap Skirt"
      price="1999"/>
    </div>
  )
}

export default Home