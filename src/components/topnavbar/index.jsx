import React from "react";
import { Link } from "@tanstack/react-router";
import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./style.css";

function TopNavbar() {
  return (
    <>
      <div className="topnav">
        <NavItem eventKey="available-jobs">
          <NavText>
            <Link to="/alljobs">Available Jobs</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="find-photographers">
          <NavText>
            <Link to="/allphotographers">Find Photographers</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="profile" className="profile">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.5" }}></i>
          </NavIcon>
          <NavText>
            <Link to="/profile">Profile</Link>
          </NavText>
        </NavItem>
      </div>
    </>
  );
}

export default TopNavbar;
