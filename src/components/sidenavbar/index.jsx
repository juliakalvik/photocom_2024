import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
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
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="new job">
            <NavIcon>
              <i
                className="fa fa-fw fa-file-circle-plus"
                style={{ fontSize: "1.5" }}
              ></i>
            </NavIcon>
            <NavText>New Job</NavText>
          </NavItem>
          <NavItem eventKey="my jobs">
            <NavIcon>
              <i
                className="fa fa-fw fa-solid fa-camera"
                style={{ fontSize: "1.5" }}
              ></i>
            </NavIcon>
            <NavText>My jobs</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default SideNavbar;
