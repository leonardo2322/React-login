import React, { useEffect, useState } from "react";
import "../styles/modal.css";
import { useSelector } from "react-redux";

const Modal = ({ ModalNameActive }) => {
  const selector = useSelector((state) => state.user.tableActive);
  const [datosT, setDatosT] = useState([]);
  console.log(ModalNameActive);
  const handleSubmit = (e) => {
    e.preventDefault();

    setDatosT(...datosT, {
      [e.target[1].name]: e.target[1].value,
      [e.target[2].name]: e.target[2].value,
      [e.target[3].name]: e.target[3].value,
      [e.target[4].name]: e.target[4].value,
    });
  };
  useEffect(() => {
    console.log(datosT);
  }, [datosT]);

  switch (ModalNameActive) {
    case "tablaRecetas":
      return (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Datos de la tabla
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h3>Introduce tus Datos aca</h3>
                    <div className="imput-group">
                      <input
                        type="text"
                        name="ingrediente"
                        placeholder="Ingrediente"
                      />
                      <span className="raya"></span>
                      <label htmlFor="Cantidad">Cantidad</label>
                      <input
                        type="number"
                        placeholder="cantidad"
                        name="Cantidad"
                        step={1}
                        min={1}
                        max={1000}
                      />
                      <input type="text" name="Peso" placeholder="Peso" />
                      <span className="raya"></span>
                      <input
                        type="text"
                        name="PrecioXUnd"
                        placeholder="Precio x UND"
                      />
                      <span className="raya"></span>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      );
    case "tablaR_diario":
      return (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Datos de la tabla
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h3>Introduce tus Datos aca registros diarios</h3>
                    <div className="imput-group">
                      <input
                        type="text"
                        name="ingrediente"
                        placeholder="Ingrediente"
                      />
                      <span className="raya"></span>
                      <label htmlFor="Cantidad">Cantidad</label>
                      <input
                        type="number"
                        placeholder="cantidad"
                        name="Cantidad"
                        step={1}
                        min={1}
                        max={1000}
                      />
                      <input type="text" name="Peso" placeholder="Peso" />
                      <span className="raya"></span>
                      <input
                        type="text"
                        name="PrecioXUnd"
                        placeholder="Precio x UND"
                      />
                      <span className="raya"></span>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      );
    case "tablacostoProducto":
      return (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Datos de la tabla
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h3>Introduce tus Datos aca tabla costos Producto</h3>
                    <div className="imput-group">
                      <input
                        type="text"
                        name="ingrediente"
                        placeholder="Ingrediente"
                      />
                      <span className="raya"></span>
                      <label htmlFor="Cantidad">Cantidad</label>
                      <input
                        type="number"
                        placeholder="cantidad"
                        name="Cantidad"
                        step={1}
                        min={1}
                        max={1000}
                      />
                      <input type="text" name="Peso" placeholder="Peso" />
                      <span className="raya"></span>
                      <input
                        type="text"
                        name="PrecioXUnd"
                        placeholder="Precio x UND"
                      />
                      <span className="raya"></span>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      );
    case "Ganancias":
      return (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Datos de la tabla
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h3>Introduce tus Datos aca Ganancias</h3>
                    <div className="imput-group">
                      <input
                        type="text"
                        name="ingrediente"
                        placeholder="Ingrediente"
                      />
                      <span className="raya"></span>
                      <label htmlFor="Cantidad">Cantidad</label>
                      <input
                        type="number"
                        placeholder="cantidad"
                        name="Cantidad"
                        step={1}
                        min={1}
                        max={1000}
                      />
                      <input type="text" name="Peso" placeholder="Peso" />
                      <span className="raya"></span>
                      <input
                        type="text"
                        name="PrecioXUnd"
                        placeholder="Precio x UND"
                      />
                      <span className="raya"></span>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      );
  }
};

export default Modal;
