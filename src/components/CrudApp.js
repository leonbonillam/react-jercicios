/* rafce snippet */
import React, { useState } from "react"; //imrs
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Herbert George Wells ",
    book: "La máquina del tiempo'",
  },
  {
    id: 2,
    name: "George Orwell",
    book: "1984",
  },
  {
    id: 3,
    name: "Ray Bradbury ",
    book: "Fahrenheit 451",
  },
  {
    id: 4,
    name: "Richard Matheson ",
    book: "Soy leyenda",
  },
  {
    id: 5,
    name: "Isaac Asimov  ",
    book: "El fin de la eternidad",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    console.log(data);
    data.id = Date.now(); //Generador id aleatorio
    console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Seguro deseas eliminar el registro con id : '${id}' ? `
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>C ̮͚̘r̩͍̮̘͔ ̰͉̭̦̙̘̬͜u͚̼̺̞͡ ̠̣̝̬̮̜͢d̪ ̣̙̩͕̳̳̝A̮̥͇̫ ͏̥̗p̝̪̬̦ p̶̳ </h2>

      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
