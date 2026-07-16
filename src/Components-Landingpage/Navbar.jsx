import React from "react";
import "./Navbar.css";
import { Link,useNavigate } from "react-router-dom";

export const Navbar=()=> {
  const navigate = useNavigate();
  return (
    <nav className="landing-navbar">
      <div className="landing-navbar-container">
      <h2>InternMS</h2>
      </div>
      <div className="landing-navbar-buttons">
        <Link to="/login" className="landing-login-btn">Login</Link>
        <button 
        className="landing-register-btn"  onClick={()=> navigate("/HRregistration")}>
          Register
        </button>
      </div>
    </nav>
  );
}

