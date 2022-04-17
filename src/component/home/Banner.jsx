import React from 'react'
import {BsArrowRight} from 'react-icons/bs'


const Banner = () => {
  return (
    <div className='banner-container'>
      <div>
        <img src="utility/img/banner2.jpg" className='banner-img' alt="" />
      </div>
      <div className='banner-info'>
        <div className='banner-title'>
          <span>Take a Picture</span>
          <span> Take the moment</span>
        </div>
        <p className='banner-text'>A picture have a power to make you happy and bring you to the past memories. It can delait your mind refresh it and make you motivated</p>
        <h4 className='visit'>Take a look <BsArrowRight></BsArrowRight> </h4>
      </div>
    </div>
  )
}

export default Banner