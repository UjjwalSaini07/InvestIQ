import React from "react";
import Home from "../pages/Home.jsx";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
