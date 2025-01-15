import React from "react";
import home from "../pages/home.jsx";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
        <home />
      </main>
    </>
  );
}

export default Layout;
