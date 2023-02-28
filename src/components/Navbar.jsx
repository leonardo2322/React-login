import React from "react";
import { useSelector } from "react-redux";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="Navbar">
      <div className="box_imgTitle">
        <img src="../img/logo.png" alt="imagen logo" />
        <h1 className="Title__P">Costos Y Precios</h1>
      </div>
      {user.user === true ? (
        <div className="box__Nav">
          <ul>
            <li><NavLink to={"/home/"} className={`isActive`? "active":"pending"}>Home</NavLink></li>
            <li><NavLink to={"/Profile"} className={`isActive`? "active":"pending"}>Profile</NavLink></li>
            <li><NavLink to={"/home/"} className={`isActive`? "active":"pending"}>graficas</NavLink></li>
          </ul>
        </div>
      ) : (
        <h2 >Sing Up</h2>
      )}
    </div>
  );
};

export default Navbar;
