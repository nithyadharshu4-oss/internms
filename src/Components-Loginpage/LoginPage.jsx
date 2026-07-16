import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import mailIcon from "../assets/Loginpage/email.png";
import lockIcon from "../assets/Loginpage/lock.png";
import eyeIcon from "../assets/Loginpage/eye-on.png";
import eyeOffIcon from "../assets/Loginpage/eye-off.png";
import googleIcon from "../assets/Loginpage/google.png";
import arrow from "../assets/Loginpage/right-arrow-white.png"
export const Login=()=> {
   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [errors, setErrors] = useState({});
  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful");

      console.log({
        email,
        password,
      });
    }
  };
  return (
    <div className="login-main">
      <div className="leftside-container">
      <div className="left-heading">
        <h1>InternHub</h1>

        <h2>your next big leap starts<br/>here.</h2>
        <p>Connect with industry leaders,manage your <br/>
        applications,and accelerate your career path with our<br/>
         comprehensive internship mangament platform</p>
        
          <div className="sts-box">
            <div>
            <h3>500+</h3>
            <span>PARTNER COMPANIES</span>
            </div>
            <div>
            <h3>10k+</h3>
            <span>SUCCESS STORIES</span>
          </div>
          </div>
          </div>
          <p className="login-copyright">&copy; 2024 InternMS.</p>
        </div>

<div className="right-container">
  <form className="login-box" onSubmit={handleSubmit}>
    <h1>Welcome Back</h1>
    <p className="subtitle">Manage your career journey.</p>

    <label>Email Address</label>
    <div className="login-input-box">
      <img src={mailIcon} alt="mail" className="login-input-icon" />
      <input
        type="email"
        placeholder="Enter Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="password-row">
      <label>Password</label>
      <p className="forgot-password"
  onClick={() => navigate("/twostepverification")}>
  Forgot Password?</p>
    </div>
    <div className="login-input-box">
      <img src={lockIcon} alt="lock" className="login-input-icon" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <img
        src={showPassword ? eyeOffIcon : eyeIcon}
        alt="toggle password visibility"
        className="eye-icon"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>

    <div className="remember">
      <input
        type="checkbox"
        checked={keepSignedIn}
        onChange={(e) => setKeepSignedIn(e.target.checked)}
      />
      <span>Keep me signed in</span>
    </div>
     <button className="signin-btn" type="submit">
            Sign In

            <img src={arrow} alt="arrow" />
          </button>
          <div>
      <div className="divider">

      <span></span>

      <p>OR</p>

      <span></span>
</div>
    </div>
    <button type="button" className="google-btn">
      <img src={googleIcon} alt="google" />
      Google
    </button>

    <p className="create">
      Don't have an account?
      <a href="/signup"> Create Account</a>
    </p>

    <div className="footer-link">
      <a href="/help">Help</a>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
    </div>
  </form>
</div>
</div>
  );
}