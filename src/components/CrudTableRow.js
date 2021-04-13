import React from "react";

const CrudTableRow = ({ el }) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.book}</td>
      <td>
        <button>Editars</button>
        <button>Eliminars</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
