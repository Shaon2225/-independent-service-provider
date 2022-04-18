import React from 'react'
import './home.css'
import Banner from './Banner'
import Service from './Service'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Review></Review>
    </div>
  )
}

export default Home