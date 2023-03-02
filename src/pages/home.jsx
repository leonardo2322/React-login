import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/UserReducer";
import "../styles/home.css";
import { useState } from "react";
import Tables from "../components/tables";
import {
  BsTable,
  BsPencilSquare,
  BsTrash,
  BsCheck2Square,
} from "react-icons/bs";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const HandleMenuClick = () => {
    setActive(!active);
  };
  const click = () => {
    /* setActive(!active); */
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
        <div className="side__body">
          <div className="actions">
            <h4>Acciones</h4>
            <button type="button" className="icon">
              <BsPencilSquare color="#daa520" fontSize={"1rem"} />
              Insertar
            </button>
            <button type="button" className="icon">
              <BsPencilSquare color="#daa520" fontSize={"1rem"} />
              Actualizar
            </button>
            <button type="button" className="icon">
              <BsCheck2Square color="#daa520" fontSize={"1rem"} />
              Guardar
            </button>
            <button type="button" className="icon">
              <BsTrash color="#daa520" fontSize={"1rem"} />
              Eliminar
            </button>
            <hr />
          </div>
          <div>
            <h4>Navegacion</h4>
            <button type="button" className="icon">
              <BsTable color="#daa520" fontSize={"1rem"}></BsTable>Recetas
            </button>
            <button type="button" className="icon">
              <BsTable color="#daa520" fontSize={"1rem"}></BsTable>R_Diario
            </button>
            <button type="button" className="icon">
              <BsTable color="#daa520" fontSize={"1rem"}></BsTable>C.Product
            </button>
            <button type="button" className="icon">
              <BsTable color="#daa520" fontSize={"1rem"}></BsTable>Ganancia
            </button>
          </div>
        </div>
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
