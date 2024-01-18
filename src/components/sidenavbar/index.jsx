import { Link } from "@tanstack/react-router";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./style.css";

function SideNavbar() {
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          console.log(selected);
        }}
        className="sidenav"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.5" }}></i>
            </NavIcon>
            <NavText>
              <Link to="/home">Home</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="new-job">
            <NavIcon>
              <i
                className="fa fa-fw fa-file-circle-plus"
                style={{ fontSize: "1.5" }}
              ></i>
            </NavIcon>
            <NavText>
              <Link to="/newjob">New Job</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="myjobs">
            <NavIcon>
              <i
                className="fa fa-fw fa-solid fa-camera"
                style={{ fontSize: "1.5" }}
              ></i>
            </NavIcon>
            <NavText>
              <Link to="/myjobs">My Jobs</Link>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default SideNavbar;
