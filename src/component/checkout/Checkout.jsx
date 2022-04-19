import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import "./check.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    swal("Good job!", "Thanks for Choosing me", "success");
    navigate('/');
  };
  return (
    <div className="login-container">
      <h1 className="login-title"> Check out</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          <p>Name</p>
          <input type="text" value={user.displayName} />
        </label>
        <label>
          <p>Email</p>
          <input type="email" value={user.email} readOnly />
        </label>
        <label>
          <p>Address</p>
          <textarea cols="50" rows="2" required></textarea>
        </label>
        <label>
          <p>Pick a date</p>
          <input type="datetime-local" required/>
        </label>
        <input type="submit" className="submit-btn" value="Procied" />
      </form>
    </div>
  );
};

export default Checkout;
