import React from "react";
import '../styles/tables.css'
const Tables = ({ handleClick,tabActiveName,children }) => {
  switch (tabActiveName){
    case "tablaRecetas":
      return (
        <>
            
          <h1 className="title__tables">Resetas</h1>
          <table className="table  table-hover table-dark ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ingrediente</th>
                <th>Cantidad</th>
                <th>Peso</th>
                <th>Precio x Und</th>
              </tr>
            </thead>
          </table>
          <ul>
            <button onClick={() => handleClick()}>logout</button>
          </ul>
          <div>{children}</div>
    
        </>
      );
    case "tablaR_diario":
      return (
        <>
            
          <h1 className="title__tables">R_diario</h1>
          <table className="table  table-hover table-dark ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ingrediente</th>
                <th>Cantidad</th>
                <th>Peso</th>
                <th>Precio x Und</th>
              </tr>
            </thead>
          </table>
          <ul>
            <button onClick={() => handleClick()}>logout</button>
          </ul>
          <div className="childrens">{children}</div>
    
        </>
      );
      case "tablacostoProducto":
        return (
          <>
              
            <h1 className="title__tables">Costo del Producto</h1>
            <table className="table  table-hover table-dark ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ingrediente</th>
                  <th>Cantidad</th>
                  <th>Peso</th>
                  <th>Precio x Und</th>
                </tr>
              </thead>
            </table>
            <ul>
              <button onClick={() => handleClick()}>logout</button>
            </ul>
            <div className="childrens">{children}</div>
      
          </>
        );
        case "Ganancias":
          return (
            <>
                
              <h1 className="title__tables">Ganancias</h1>
              <table className="table  table-hover table-dark ">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Ingrediente</th>
                    <th>Cantidad</th>
                    <th>Peso</th>
                    <th>Precio x Und</th>
                  </tr>
                </thead>
              </table>
              <ul>
                <button onClick={() => handleClick()}>logout</button>
              </ul>
              <div className="childrens">{children}</div>
        
            </>
          );

  }
  
};

export default Tables;
