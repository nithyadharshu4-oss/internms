import React from 'react';
import adminlap from "../assets/registration/adminlap.png";
import protectwhite from "../assets/registration/protectwhite.png";
import secure from "../assets/registration/secure.png";
import "./AdminRegistration.css";
export  const AdminRegistration=() =>{
  return (
    <div className="admin-registration-main">
      <div className="admin-registration-container">
        <p>InterMS</p>
        <div className='admin-left-content'>
            <h1>Regain access to your <br/>professional future.</h1>
            <p>Join thousands of companies and educational<br/>institutions managing the next generation of global<br/>
            talent through our secure, integrated ecosystem.</p>
            <div className='admin-image'>
            <img src={adminlap} alt="adminlap" />
          </div>

        </div>
        <div className='admin-image-content'>
            <img src={protectwhite} alt="protectwhite" />
            <div>
                <h6>Role-based access</h6>
                <p>Secure and personalized experience for every user.</p>
            </div>
        </div>
        <div className='admin-image-content'>
            <img src={secure} alt="secure" />
            <div>
                <h6>Trusted & Secure</h6>
                <p>Your data is protected with industry-standard security..</p>
            </div>
            </div>
        </div>
    </div>
  );
}

