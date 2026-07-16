import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import shieldIcon from "../assets/Loginpage/Resetpassword-shield.png";
import tickIcon from "../assets/Loginpage/Resetpassword-tick.png";
import lockIcon from "../assets/Loginpage/lock.png";
import rightArrow from "../assets/Loginpage/right-arrow-white.png";
import secure from"../assets/Loginpage/secure.png";

export const ResetPassword=()=> {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const passwordLength = newPassword.length >= 8;
  const passwordMatch =
    newPassword !== "" &&
    confirmPassword !== "" &&
    newPassword === confirmPassword;

  const handleUpdatePassword = () => {
    if (newPassword.trim() === "" || confirmPassword.trim() === "") {
      setError("Please enter both passwords.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    navigate("/resetpasswordsuccess");
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="Resetpassword-main">
      <div className="left-container">
        <div className="left-content">
          <div className="setup-shield">
            <img src={shieldIcon} alt="Shield" />
          </div>

          <h1>
            Secure your
            <br />
            account.
          </h1>

          <p>
            Ensure your career progress is protected. Set a strong
            <br />
            password to continue your journey with InternHub.
          </p>

          <div className="copyright-section">
            <span className="copyright-text">
              &copy; 2024 InternMS
            </span>

            <span className="copyright-divider">
              &nbsp;•&nbsp; Privacy Policy
            </span>

     
          </div>
        </div>
      </div>

      <div className="setup-right">
        <div className="setup-card">
          
          <div className="secure-reset">
         <img src={secure} alt="secure" /></div>
          <h2>Set New Password</h2>

          <p className="setup-description">
            Your new password must be different from previous passwords.
          </p>

          <div className="input-group">
            <label>New Password</label>

            <div className="input-box">
              <img src={lockIcon} alt="Lock" />

              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>

            <div className="input-box">
              <img src={tickIcon} alt="Tick" />

              <input
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <div className="password-info">
            <div className="info-row">
              <span className="status">
                {passwordLength ? "✓" : ""}
              </span>
              <span>At least 8 characters</span>
            </div>

            <div className="info-row">
              <span className="status">
                {passwordMatch ? "✓" : ""}
              </span>
              <span>Passwords match</span>
            </div>
          </div>

          <button
            className="update-btn"
            type="button"
            onClick={handleUpdatePassword}
          >
            Update Password
            <img src={rightArrow} alt="Arrow" />
          </button>

          <button
            className="back-login"
            type="button"
            onClick={handleBackToLogin}
          >
            &lsaquo; Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

