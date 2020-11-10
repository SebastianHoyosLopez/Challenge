import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableToDoList from "../components/TableToDoList";
import { v4 as uuidv4 } from "uuid";
import ModalNewHomeWork from "../components/ModalNewHomeWork";

function Todolist() {

  const [homeWorks, setHomeWorks] = useState([]);

  const addHomeWork = (homeWork) => {
    homeWork.id = uuidv4();
    setHomeWorks([...homeWorks, homeWork]);
  };

  const deleteHomeWork = (id) => {
    setHomeWorks(homeWorks.filter((homeWork) => homeWork.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="col">Lista De tareas</h1>
        <div className="col mt-2">
          <ModalNewHomeWork addHomeWork={addHomeWork} />
        </div>
      </div>
      <div>
        <div>
          <TableToDoList
            homeWorks={homeWorks}
            setHomeWorks={setHomeWorks}
            deleteHomeWork={deleteHomeWork}
          />
        </div>
      </div>
    </div>
  );
}

export default Todolist;
