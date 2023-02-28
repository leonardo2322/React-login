import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
    <nav>navbar</nav>
    <main><Outlet /></main>
      
      <footer>footer</footer>
    </>
  );
};

export default Layout;
