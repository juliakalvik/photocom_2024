import { useState } from "react";
import "./App.css";
import { Outlet } from "@tanstack/react-router";
import Nav from "./components/navbar";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
