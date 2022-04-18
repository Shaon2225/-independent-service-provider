import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div className='banner-container'>
      <div>
        <img src="utility/img/banner2.jpg" className='banner-img' alt="" />
      </div>
      <div className='banner-info'>
        <div className='banner-title'>
          <span className='title-1'>Take a Picture</span>
          <span className='title-1'> Take the moment</span>
        </div>
        <p className='banner-text'>A picture have a power to make you happy and bring you to the past memories. It can delait your mind refresh it and make you motivated</p>
        <h4 className='visit'><Link to={'/gallary'} className="g-title">Take a look <BsArrowRight></BsArrowRight> </Link></h4>
      </div>
    </div>
  )
}

export default Banner