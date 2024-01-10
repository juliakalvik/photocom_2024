import { useState } from "react";
import "./App.css";
import { Outlet } from "@tanstack/react-router";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
