import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TwoStepVerification.css";

import securityIcon from "../assets/Loginpage/securityTsve.png";
import emailIcon from "../assets/Loginpage/email-colour.png";
import mobileIcon from "../assets/Loginpage/mobile.png";
import leftArrow from "../assets/Loginpage/left-arrow-blue.png";
import rightArrow from "../assets/Loginpage/right-arrow-white.png";

export const TwoStepverification=()=>{
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("email");

  const handleVerify = () => {
    navigate("/VerificationCode", {
      state: {
        type: selectedMethod,
        value:
          selectedMethod === "email"
            ? "j***n@gmail.com"
            : "+91 9****5678",
      },
    });
  };

  return (
    <div className="twostep-verification-main">
      <div className="twostep-left-container">
        <div className="twostep-left-content">
          <h1 className="twostep-left-heading">
            Secure Your Account
          </h1>

          <p className="twostep-left-description">
            Protecting your professional profile and
            <br />
            application history is our top priority. Choose a
            <br />
            method to verify your identity.
          </p>

          <div className="security-info">
  <div>
              <img
                src={securityIcon}
                alt="Security"
                className="security-icon"
              />
              </div>

            <div className="security-text">
              <h4>256-bit Encryption</h4>
              <p>Bank-grade security standards</p>
           
          </div>
        </div>
       </div>
        <p className="login-twostep-copyright">
          &copy; 2024 InternMS
        </p>
      </div>
       

      <div className="two-step-right-container">
        <div className="two-step-form">
          <h2 className="form-title">
            Two-Step Verification
          </h2>

          <p className="form-subtitle">
            Choose how you'd like to verify your identity.
          </p>

          <div
            className={`verification-card ${
              selectedMethod === "email" ? "active" : ""
            }`}
            onClick={() => setSelectedMethod("email")}
          >
            <div className="card-left">
              <div className="card-icon-wrapper">
                <img
                  src={emailIcon}
                  alt="Email"
                  className="card-icon"
                />
              </div>

              <div className="card-details">
                <h3>Email Verification</h3>
                <p>j**n@g***l.com</p>
              </div>
            </div>

            <div
              className={`radio-button ${
                selectedMethod === "email" ? "selected" : ""
              }`}
            ></div>
          </div>

          <div
            className={`verification-card ${
              selectedMethod === "mobile" ? "active" : ""
            }`}
            onClick={() => setSelectedMethod("mobile")}
          >
            <div className="card-left">
              <div className="card-icon-wrapper">
                <img
                  src={mobileIcon}
                  alt="Mobile"
                  className="card-icon"
                />
              </div>

              <div className="card-details">
                <h3>Mobile Verification</h3>
                <p>+91 9****5678</p>
              </div>
            </div>

            <div
              className={`radio-button ${
                selectedMethod === "mobile" ? "selected" : ""
              }`}
            ></div>
          </div>

          <button
            className="continue-button"
            type="button"
            onClick={handleVerify}
          >
            Send Verification Code

            <img
              src={rightArrow}
              alt="Arrow"
              className="continue-arrow"
            />
          </button>

          <button
            className="login-button"
            type="button"
            onClick={() => navigate("/login")}
          >
            <img src={leftArrow} alt="Back" />
            Back to Login
          </button>

          <div className="divider"></div>

          <p className="support-text">
            Need help?{" "}
            <span className="support-link">
              Contact Support
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

