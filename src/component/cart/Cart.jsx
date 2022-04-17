import React from 'react'
import './Cart.css'
const Cart = ({cart}) => {
    const {img,title,price}=cart;
  return (
    <div className='cart-area'>
        <div>
            <img className='cart-img' src={img} alt="" />
        </div>
        <div className='cart-details'>
            <h1 className='cart-heading'>{title}</h1>
            <h4 className='price'>Price: ${price} per day</h4>
        </div>
        <div className='button'>
            <button className='button1'>Book now</button>
            <button className='button2'>Sample</button>
        </div>
    </div>
  )
}

export default Cart