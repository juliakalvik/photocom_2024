import React from "react";
import "./navbar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">Logo</div>

      {/* Profile */}
      <div className="profile">
        <img src="profile.jpg" alt="Profile" />
        <div className="username">John Doe</div>
      </div>

      {/* Navigation links */}
      <ul className="navigation-links">
        <li>Add New Job</li>
        <li>My Listed Jobs</li>
        <li>My Jobs</li>
      </ul>
    </div>
  );
};

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      {/* Browse Jobs */}
      <div>Browse Jobs</div>

      {/* Browse Photographers */}
      <div>Browse Photographers</div>

      {/* Profile dropdown */}
      <div className="profile-dropdown">
        <div>Profile</div>
        <div className="dropdown-content">
          <div>Settings</div>
          <div>Log Out</div>
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="nav">
      <Sidebar />
      <TopNavbar />
    </div>
  );
};

export default Nav;
