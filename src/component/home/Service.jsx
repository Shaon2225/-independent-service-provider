import React from 'react'
import Cart from '../cart/Cart'

const Service = () => {

    const services =[
        {
            id:'s1',
            img:'utility/img/s/wed.svg',
            title:'Wedding photography',
            price:100
        },
        {
            id:'s2',
            img:'utility/img/s/tr.svg',
            title:'Land scape photography',
            price:500
        },
        {
            id:'s3',
            img:'utility/img/s/pro.svg',
            title:'Product photography',
            price:250
        }
    ]

  return (
    <div className='container service-area'>
        <h1 className="service-title">Services</h1>
        <div className='service-container'>
        {
            services.map(ele=> <Cart key={ele.id} cart={ele}></Cart>)
        }
        </div>
    </div>
  )
}

export default Service