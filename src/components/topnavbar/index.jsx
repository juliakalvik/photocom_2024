import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./style.css";

function TopNavbar() {
  return (
    <>
      <div className="topnav">
        <NavItem eventKey="home">
          <NavText>Available jobs</NavText>
        </NavItem>
        <NavItem eventKey="home">
          <NavText>Find photographers</NavText>
        </NavItem>
        <NavItem eventKey="home" className="profile">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.5" }}></i>
          </NavIcon>
          <NavText>Profile</NavText>
        </NavItem>
      </div>
    </>
  );
}

export default TopNavbar;
