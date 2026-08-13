import React from 'react';
import "./HrMyprofile.css";

import editIcon from "../assets/hr-modules/editIcon.png";
import profileimage from"../assets/hr-modules/profileimage.jpg";

export const HrMyprofile=()=> {
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

</div>

</div>

 






 </div>
  );
}
