import React from "react";
import "./HrDashboardMain.css";
import { HrDashboardSidebar } from "./HrDashboardSidebar";
import { HrDashboardHeader } from "./HrDashboardHeader";
import { HrDashboard } from "./HrDashboard";
import { useState } from "react";
import { HrMyprofile } from "./HrMyprofile";



export const HrDashboardMain = () => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  return (
    <div className="hr-dashboard-main">
      <HrDashboardSidebar
        isOpen={isOpen}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <div
        className={isOpen ? "hr-dashboard-right" : "hr-dashboard-right mini"}
      >
        <HrDashboardHeader isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="hr-dashboard-content-main">
          {activeMenu === "Dashboard" && <HrDashboard />}

          {activeMenu === "My Profile" && <HrMyprofile />}
        </div>
      </div>
    </div>
  );
};
