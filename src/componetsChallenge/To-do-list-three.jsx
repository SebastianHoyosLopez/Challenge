import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableToDoList from "../components/TableToDoList";
import { v4 as uuidv4 } from "uuid";
import ModalNewHomeWork from "../components/ModalNewHomeWork";

function Todolist() {
  const [homeWorks, setHomeWorks] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you have ${count} homeworks`;
  }, [count]);

  const addHomeWork = (homeWork) => {
    homeWork.id = uuidv4();
    setHomeWorks([...homeWorks, homeWork]);
    setCount(count + 1);
  };

  const deleteHomeWork = (id) => {
    setHomeWorks(homeWorks.filter((homeWork) => homeWork.id !== id));
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="col">Cantidad De Tareas Pendientes: {count} </h1>
        <div className="col mt-2">
          <ModalNewHomeWork
            addHomeWork={addHomeWork}
            setHomeWorks={setHomeWorks}
            homeWorks={homeWorks}
          />
        </div>
      </div>
      <div>
        <div>
          <TableToDoList
            homeWorks={homeWorks}
            setHomeWorks={setHomeWorks}
            deleteHomeWork={deleteHomeWork}
            count={count}
            setCount={setCount}
          />
        </div>
      </div>
    </div>
  );
}

export default Todolist;
