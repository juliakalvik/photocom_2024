import { useState } from "react";
import "./App.css";
import { Outlet } from "@tanstack/react-router";
import Nav from "./components/navbar";
import SideNavbar from "./components/sidenavbar";
import TopNavbar from "./components/topnavbar";

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
