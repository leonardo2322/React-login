import React from "react";
import '../styles/tables.css'
const Tables = ({ handleClick,children }) => {
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
};

export default Tables;
