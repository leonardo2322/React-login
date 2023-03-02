import React from "react";

const Tables = ({ handleClick,children }) => {
  return (
    <>
        
      <h1 >Resetas</h1>
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
