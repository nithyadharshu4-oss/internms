import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./VerificationCode.css";

import securityIcon from "../assets/Loginpage/protect-blue.png";
import arrowIcon from "../assets/Loginpage/right-arrow-white.png";

const RESEND_SECONDS = 58;

export const VerificationCode=()=>{
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const updatedOtp = new Array(6).fill("");

    pasted.split("").forEach((digit, i) => {
      updatedOtp[i] = digit;
    });

    setOtp(updatedOtp);

    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const handleVerify = () => {
    const code = otp.join("");

    if (code.length !== 6) {
      alert("Please enter the complete 6-digit verification code.");
      return;
    }

    navigate("/forgotpassword");
  };

  return (
    <div className="verification-code-main">
      <div className="verification-code-container">
        <div className="verification-code-leftcontent">
          <div className="verification-code-icon-box">
            <img
              src={securityIcon}
              alt="Security"
              className="verification-code-security-icon"
            />
          </div>

          <h1 className="verification-code-heading">
            Security first.
          </h1>

          <p className="verification-code-description">
            We take your account security seriously. Verify your identity to
            protect your internship applications and sensitive professional
            data.
          </p>

          <p className="verification-code-footer-text">
            Joined by 10k+ professionals
          </p>
        </div>
      </div>

      <div className="verification-code-right-container">
        <div className="verification-code-form">
          <h2 className="verification-code-title">
            Enter Verification Code
          </h2>

          <p className="verification-code-subtitle">
            We've sent a 6-digit code to your email{" "}
            <strong>j**n@g***l.com</strong>
          </p>

          <div
            className="verification-code-otp-row"
            onPaste={handlePaste}
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                className="verification-code-otp-box"
                type="text"
                maxLength={1}
                inputMode="numeric"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button
            className="verification-code-button"
            type="button"
            onClick={handleVerify}
          >
            Verify Identity

            <img
              src={arrowIcon}
              alt="Arrow"
              className="verification-code-button-arrow"
            />
          </button>

          <p className="verification-code-resend">
            Didn't receive the code?{" "}
            {secondsLeft > 0 ? (
              <span className="verification-code-timer">
                Resend in {formatTime(secondsLeft)}
              </span>
            ) : (
              <span
                className="verification-code-resend-link"
                onClick={() => setSecondsLeft(RESEND_SECONDS)}
              >
                Resend now
              </span>
            )}
          </p>

          <div className="verification-code-divider"></div>

          <button
            className="verification-code-back-button"
            type="button"
            onClick={() => navigate("/twostepverification")}
          >
            Back to verification options
          </button>

          <a href="#" className="verification-code-support-link">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
