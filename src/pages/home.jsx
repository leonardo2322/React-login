import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/UserReducer";
import "../styles/home.css";
import { useState } from "react";
import Tables from "../components/tables";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const HandleMenuClick = () => {
    setActive(!active);
  };
  const handleClick = () => {
    dispatch(login(null));
    return navigate("/");
  };
  return (
    <div className="contain__home">
      <section className="Container__side">
        <div id="header__side">
          <button className="btn">
            <span className="icon">
              <label htmlFor="burger" className="burger">
                <input
                  id="burger"
                  onChange={() => HandleMenuClick()}
                  checked={active}
                  type="checkbox"
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </span>
            <span className="text">MENU</span>
          </button>
        </div>
        <div id="body__side"></div>
      </section>
      <section className={`side__menu ${active ? "active" : ""} `}>
        <div></div>
      </section>
      <section className="home__body">
        <Tables handleClick={handleClick}>
          <table className="table  table-hover table-dark table-striped-columns">
            <thead>
              <tr>
                <th>Costo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Costo x Porcion</th>
                <td>0.85</td>
              </tr>
              <tr>
                <th>Costo x Receta</th>
                <td>4.85</td>
              </tr>
              <tr>
                <th>Precio del Menu</th>
                <td>7.85</td>
              </tr>
            </tbody>
          </table>
        </Tables>
      </section>
    </div>
  );
};

export default Home;
