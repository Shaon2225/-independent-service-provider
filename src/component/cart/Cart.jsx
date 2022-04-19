import React from 'react'
import { Link } from 'react-router-dom';
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
            <button className='button1 sample-title'><Link to={'/checkout'} className='sample-title'>Book now</Link></button>
            <button className='button2'><Link to={'/gallary'} className='sample-title'>Sample</Link></button>
        </div>
    </div>
  )
}

export default Cart