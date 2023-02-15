import React from 'react'
import SellerProducts from '../components/SellerProducts'
import Navbar from '../Layouts/Navbar'

const Cart = () => {
  return (
    <div className='cart_main'>
      <Navbar page="cart"/>
      <div className="cart_product">
        <SellerProducts/>
        <SellerProducts/>
      </div>
    </div>
  )
}

export default Cart
