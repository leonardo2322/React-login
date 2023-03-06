import {  useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { login, tabActive } from "../features/UserReducer";
import "../styles/home.css";
import { useState } from "react";
import Tables from "../components/tables";
import Modal from "../components/modal";
import {
  BsTable,
  BsPencilSquare,
  BsTrash,
  BsCheck2Square,
} from "react-icons/bs";


const Home = () => {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.tableActive)
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [IdModal, setIdModal]= useState("");

  const HandleMenuClick = () =>  setActive(!active);
 
  const handleClickTables = (name) => {
    dispatch(tabActive({id:name, active:true}))
  };
  const handleClick = () => {
    dispatch(login(null));
    return navigate("/");
  };
  console.log(selector)
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

            <button
              type="button"
              className="icon"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={() => setIdModal(selector.id) }
            >
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
            <button type="button" className="icon" onClick={()=> handleClickTables("tablaRecetas")}>
              <BsTable color="#daa520" fontSize={"1rem"}></BsTable>Recetas
            </button>
            <button type="button" className="icon" onClick={()=> handleClickTables("tablaR_diario")}>
              <BsTable color="#daa520" fontSize={"1rem"}></BsTable>R_Diario
            </button>
            <button type="button" className="icon" onClick={()=> handleClickTables("tablacostoProducto")}>
              <BsTable color="#daa520" fontSize={"1rem"}></BsTable>C.Product
            </button>
            <button type="button" className="icon" onClick={()=> handleClickTables("Ganancias")}>
              <BsTable color="#daa520" fontSize={"1rem"}></BsTable>Ganancia
            </button>
          </div>
        </div>
      </section>
      <section className="home__body">
        <Modal ModalNameActive={IdModal} />
      {
        selector.active ?
        <Tables handleClick={handleClick} tabActiveName={selector.id}>
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
        : <h1>Selecciona una tabla en el menu de Navegacion</h1>
      }
        
      </section>
    </div>
  );
};

export default Home;
