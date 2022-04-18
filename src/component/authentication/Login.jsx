import React, { useRef } from "react";
import "./login.css";
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Please Log in</h2>
      <form onSubmit={handleLogIn} className="form-container">
        <label>
          <p>Email</p>
          <input type="email" ref={emailRef} placeholder="Email" required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" ref={passRef} placeholder="Password" required/>
        </label>
        <input type="submit" className="submit-btn" value="Log In" />
      </form>
      <div>
        <h4 className='title'>Don't have an account? <Link to={'/signup'}>Sign Up</Link></h4>
        <h4 className="title">Forgate password</h4>
      </div>
      <div className="or">
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      <h2 className="login-title fs-5">Contiue with</h2>
      <div className="social-login">
        <span><FcGoogle></FcGoogle></span>
        <span><BsGithub></BsGithub></span>

      </div>
    </div>
  );
};

export default Login;
