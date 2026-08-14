import React from 'react';
import "./HrMyProfile.css";
import editIcon from "../assets/hr-modules/editIcon.png";
import profileimage from"../assets/hr-modules/profileimage.png";
import mail from "../assets/hr-modules/mail.png"
import phone from "../assets/hr-modules/phone.png";
import location from "../assets/hr-modules/location.png";
import date from "../assets/hr-modules/date.png";
import department from "../assets/hr-modules/department.png";
import workinformation from "../assets/hr-modules/workinformation.png";
import personalinformation from"../assets/hr-modules/personalinformation.png";
import education from "../assets/hr-modules/education.png";
export const HrMyProfile=()=> {
  return (
 <div className="hr-myprofile-main">
 
 <div className="hr-myprofile-title">

  <div>
<h1>My Profile</h1>
<p>View and update your personal information</p>
</div>

<div className="hr-myprofile-editbtn">
<button>
  <img src={editIcon} alt="edit"/>Edit Profile
</button>
</div>
</div>

<div className="hr-myprofile-card">
<div className="hr-myprofileimage">
  <img src={profileimage} alt="profile"/>

</div>

<div className="hr-myprofile-details">
  <h3>Aiswariya</h3>
  <h5>HR Manager</h5>
  <h6>Employee ID: 12345</h6>
  <p>Dedicated HR professional with experience in<br/>
talent acquisition,employee relations,and<br/>
performance management.</p>

</div>

<div className="hr-myprofile-bio">

  <div className='hr-myprofile-bio-card'>  
    <img src={mail} alt="mail" />
  <div className='hr-myprofile-bio-text'>
    <h6>Email</h6>
    <p>priya.sharma@company.com</p>
  </div>
  </div>


    <div className='hr-myprofile-bio-card'>  
    <img src={phone} alt="phone" />
  <div className='hr-myprofile-bio-text'>
    <h6>Phone</h6>
    <p>+91 9876543210</p>
  </div>
  </div>


    <div className='hr-myprofile-bio-card'>  
    <img src={location} alt="location" />
  <div className='hr-myprofile-bio-text'>
    <h6> Location</h6>
    <p> Bangalore,India</p>
  </div>
  </div>


    <div className='hr-myprofile-bio-card'>  
    <img src={department} alt="department" />
  <div className='hr-myprofile-bio-text'>
    <h6>Department</h6>
    <p>Human Resources</p>
  </div>
  </div>


    <div className='hr-myprofile-bio-card'>  
    <img src={date} alt="date" />
  <div className='hr-myprofile-bio-text'>
    <h6>Joined On</h6>
    <p>15 Jan 2023</p>
  </div>
  </div>


</div>

</div>


<div className="hr-myprofile-tables">

  <div className="hr-myprofile-workinformation">
    <div className="hr-myprofile-workinformation-title">
      <img src={workinformation} alt="workinformation"/>
      <h3>Work Information</h3>
    </div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Experience</span>
  <span className="hr-myprofile-rowdata-value">5 years</span>
</div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Current role</span>
  <span className="hr-myprofile-rowdata-value">HR Management</span>
</div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Work<br/>Location</span>
  <span className="hr-myprofile-rowdata-value">Bangalore(office)</span>
</div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Shift Timings</span>
  <span className="hr-myprofile-rowdata-value">9:30 AM - 6:30 PM</span>
</div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">probation<br/>Period</span>
  <span className="hr-myprofile-rowdata-value">completed</span>
</div>
</div>


<div className="hr-myprofile-personalinformation">
    <div className="hr-myprofile-personalinformation-title">
      <img src={personalinformation} alt="personalinformation"/>
      <h3>Personal Information</h3>
    </div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Date of Birth </span>
  <span className="hr-myprofile-rowdata-value">12 March 1993</span>
</div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Gender</span>
  <span className="hr-myprofile-rowdata-value">Female</span>
</div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Nationality</span>
  <span className="hr-myprofile-rowdata-value">Indian</span>
</div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Marital <br/>Status </span>
  <span className="hr-myprofile-rowdata-value">Single</span>
</div>

<div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Language </span>
  <span className="hr-myprofile-rowdata-value">English,Telugu,Hindi</span>
</div>
 
 <div className="hr-myprofile-rowdata">
  <span className="hr-myprofile-rowdata-label">Blood Group</span>
  <span className="hr-myprofile-rowdata-value">o+</span>
</div>
</div>
<div className="hr-myprofile-education">
  <div className="hr-myprofile-education-title">
    <img src={education} alt="education" />
    <h3>Education</h3>
  </div>

  <div className="hr-myprofile-education-row">
    <div className="hr-myprofile-education-details">
      <span className="hr-myprofile-rowdata-label">
        MBA - Human Resources
      </span>
      <span className="hr-myprofile-education-institute">
        Osmania University, Hyderabad
      </span>
    </div>

    <span className="hr-myprofile-rowdata-value">2025</span>
  </div>

  <div className="hr-myprofile-education-row">
    <div className="hr-myprofile-education-details">
      <span className="hr-myprofile-rowdata-label">
        BBA - Management
      </span>
      <span className="hr-myprofile-education-institute">
        Osmania University, Hyderabad
      </span>
    </div>

    <span className="hr-myprofile-rowdata-value">2022</span>
  </div>

  <div className="hr-myprofile-education-row">
    <div className="hr-myprofile-education-details">
      <span className="hr-myprofile-rowdata-label">
        Intermediate - MPC
      </span>
      <span className="hr-myprofile-education-institute">
        Sri Chaitanya Junior College
      </span>
    </div>

    <span className="hr-myprofile-rowdata-value">2019</span>
  </div>

  <div className="hr-myprofile-education-row">
    <div className="hr-myprofile-education-details">
      <span className="hr-myprofile-rowdata-label">
        Primary School
      </span>
      <span className="hr-myprofile-education-institute">
        Keshava Reddy School
      </span>
    </div>

    <span className="hr-myprofile-rowdata-value">2017</span>
  </div>
</div>



</div>
</div>
  );
}