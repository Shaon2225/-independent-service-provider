import React from 'react'
import './Gallary.css'

const PhotoCart = ({photo}) => {
    const {img}=photo;
    return (
    <div className='shadow'>
        <img src={img} className='gallary-photo' alt="" />
    </div>
  )
}

export default PhotoCart