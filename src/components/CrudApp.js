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
  return (
    <div>
      <h2>C ̮͚̘r̩͍̮̘͔ ̰͉̭̦̙̘̬͜u͚̼̺̞͡ ̠̣̝̬̮̜͢d̪ ̣̙̩͕̳̳̝A̮̥͇̫ ͏̥̗p̝̪̬̦ p̶̳ </h2>

      <CrudForm />
      <CrudTable data={db} />
    </div>
  );
};

export default CrudApp;
