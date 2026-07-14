import { useNavigate } from "react-router-dom";
import "./ResetPasswordSuccess.css";

import successimg from "../assets/Loginpage/click-image.png";
import lefttick from "../assets/Loginpage/white-tick.png";
import success from "../assets/Loginpage/success.png";

export const ResetPasswordSuccess=()=> {
  const navigate = useNavigate();

  return (
    <div className="resetpassword-success-main">
      <div className="resetpassword-success-left">
        <div className="success-left-content">
          <img
            className="success-left-icon"
            src={lefttick}
            alt="Success Icon"
          />

          <h1>
            Password reset
            <br />
            successfully
          </h1>

          <p>
            Your security is our priority. You can now log in with
            <br />
            your new credentials.
          </p>

          <img
            className="success-left-image"
            src={successimg}
            alt="Success"
          />
        </div>
      </div>

      <div className="resetpassword-success-right">
        <div className="success-box">
          <img
            src={success}
            alt="Success"
            className="success-badge"
          />

          <h1 className="success-title">
            Success
          </h1>

          <p className="success-text">
            Your password has been updated. To keep your account
            secure, we recommend not sharing your password with
            anyone.
          </p>

          <button
            className="reset-login-box"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

