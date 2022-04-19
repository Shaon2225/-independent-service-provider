import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <h1>Q1. What is the difference between authorization and authentication</h1>
      <p><b>Ans.</b> Authorization mainly indicate to the rights that what one can do and can't. On the other hand authentication is the process of checking something is valid or not. For example in website genarel user can scroll, like, comment, share etc. but admine of this website can modify post, control user etc. this is authorization. but when user or admin come to login then authentication come.</p>
      <h1>Q2. Why are you using firebase? What other options do you have to implement authentication?</h1>
      <p><b>Ans.</b> Firebase is a service provider by Google. it provide hosting, authentication, realtime database etc. Now is we do this by us then it will be deficult ot maintain the server and security. As firebase is a large service provider , it can provide more security and fast response. Firebase offer authentication as well as hosting, realtime database, database, analyitcs for the website etc.</p>
      <h1>Q3. What other services does firebase provide other than authentication</h1>
      <p><b>Ans.</b> beside firebase there are many company which provide authentication.
       <ul>
         <li>Parse</li>
         <li>Back4App</li>
         <li>AWS</li>
         <li>Kuzzle</li>
       </ul>
      </p>

    </div>
  )
}

export default Blog