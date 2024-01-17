import "./App.css";
import { Outlet } from "@tanstack/react-router";
import SideNavbar from "./components/sidenavbar";
import TopNavbar from "./components/topnavbar";
import Auth from "./Auth";

function App() {
  return (
    <>
      <header>
        <TopNavbar />
        <SideNavbar />
      </header>
      <main>
        <Auth />
        <Outlet />
      </main>
    </>
  );
}

export default App;
