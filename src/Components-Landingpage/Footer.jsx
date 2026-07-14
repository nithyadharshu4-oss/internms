import React from "react";
import "./Footer.css";
import iconGlobal from "../assets/Landingpage/global.png";
import iconEmail from "../assets/Landingpage/mail.png";
export const Footer=()=> {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="footer-logo">InternMS</h2>

          <p className="footer-text">
            The ultimate platform for managing <br/>
            internships, connecting talent,
            and <br/>
            building the future of work.
          </p>

          <div className="footer-socialicons">
            <a href="#">
              <img src={iconGlobal} alt="Global" />
            </a>

            <a href="#">
              <img src={iconEmail} alt="Email" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Product</h3>

          <a href="#">For Students</a>
          <a href="#">For Employers</a>
          <a href="#">For Universities</a>
          <a href="#">Pricing</a>
        </div>

        <div className="footer-links">
          <h3>Company</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Resources</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <hr/>

      <div className="footer-bottom">
        <p>&copy; 2024 InternMS. All rights reserved.</p>

        <p>
          Made with <span className="footer-heart">&hearts;</span> for the future workforce
        </p>
      </div>
    </footer>
  );
}

