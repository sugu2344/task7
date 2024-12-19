import React from "react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>Navbar Page </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
