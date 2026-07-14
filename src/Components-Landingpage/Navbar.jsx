import React from "react";
import "./Navbar.css";
import { Link,useNavigate } from "react-router-dom";

export const Navbar=()=> {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <h2>InternMS</h2>
      </div>
      <div className="navbar-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <button 
        className="register-btn"  onClick={()=> navigate("/HRregistration")}>
          Register
        </button>
      </div>
    </nav>
  );
}

