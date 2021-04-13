import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Toblo do dotos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Libro</th>
            <th>Acciones </th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Data</td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
