import React from 'react'
import './aboutme.css'

const AboutMe = () => {
  return (
    <div className='aboutme-container'>
      <div className='aboutme-details'>
      <h2>I'm <span className='my-name'>Md. Shahriar Nazim</span></h2>
      <h2>I serve people with my <span className='my-name'>Skill</span></h2>
      <p className='details-text'>
        I'm very dedicated to my work and try to give my best to complete my task. My future goal is to improve my webdeveloping skill more and become one of the best in this sector. Besides that as I'm a final year student of Electrical and Electronic Engineering at KUET, I also want to improve my skill in this sector. People said muilti tasking is not efficient but I belive that man can do any thing what he want. So I try my best to do this.
      </p>
      </div>
      <div>
        <img className='my-img' src="utility/img/me-wbg.png" alt="" />
      </div>
    </div>
  )
}

export default AboutMe