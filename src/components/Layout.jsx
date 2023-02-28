import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import '../styles/Main.css'
import Footer from "./footer"
const Layout = () => {
  return (
    <>
    <nav>
      <Navbar />
    </nav>
    <main className="Main__content"><Outlet /></main>
      
      <footer><Footer /></footer>
    </>
  );
};

export default Layout;
