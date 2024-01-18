import "./App.css";
import { Outlet } from "@tanstack/react-router";
import SideNavbar from "./components/sidenavbar";
import TopNavbar from "./components/topnavbar";
import Auth from "./Auth";
import RegistrationForm from "./components/registration";

function App() {
  return (
    <>
      <header>
        <TopNavbar />
        <SideNavbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
