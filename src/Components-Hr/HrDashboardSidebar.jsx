import React from 'react';
import "./HrDashboardSidebar.css";
import { useNavigate } from 'react-router-dom';
import dashboard from "../assets/hr-modules/dashboard.png";
import myprofile from "../assets/hr-modules/myprofile.png";
import internIcon from "../assets/hr-modules/internIcon.png";
import applications from "../assets/hr-modules/applications.png";
import organization from "../assets/hr-modules/organization.png";
import mentors from "../assets/hr-modules/mentors.png";
import taskapprovals from "../assets/hr-modules/taskapprovals.png";
import attendance from "../assets/hr-modules/attendance.png";
import onboarding from "../assets/hr-modules/onboarding.png";
import reports from "../assets/hr-modules/reports.png";
import communications from "../assets/hr-modules/communications.png";
import notifications from "../assets/hr-modules/notifications.png";
import settings from "../assets/hr-modules/settings.png";

export const HrDashboardSidebar = ({
  isOpen,
  activeMenu,
  setActiveMenu,   
    }) => {
      const navigate = useNavigate();
    const menuItems = [
      { icon: dashboard, text: "Dashboard" },
      {icon:myprofile,text:"My Profile"},
      { icon: internIcon, text: "Interns" },
      { icon: applications, text: "Applications" },
      {icon:organization,text:"Organization"},
      { icon: mentors, text: "Mentors" },
      { icon: taskapprovals, text: "Task & Approvals" },
      { icon: attendance, text: "Attendance" },
      {icon:onboarding,text:"Onboarding"},
      { icon: reports, text: "Reports&Analytics" },
      { icon: communications, text: "Communications" },
      { icon: settings, text: "Settings" },
    ];
  return(
    
<div className={isOpen ? "hr-dashboard-sidebar" : "hr-dashboard-sidebar-mini"}>

      <div className="hr-dashboard-menu-list">

  {menuItems.map((item, index) => (
  <div
    key={index}
    className={`hr-dashboard-menu-item ${
      activeMenu === item.text ? "active" : ""
    }`}
    onClick={() => setActiveMenu(item.text)}
  >
    <img src={item.icon} alt={item.text} />

    {isOpen && <span>{item.text}</span>}
  </div>
))}

      </div>


    </div>
    
  );
}
