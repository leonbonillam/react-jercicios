import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, book, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{book}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editars</button>
        <button onClick={() => deleteData(id)}>Eliminars</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
