import React, { useState } from "react";
import EditHomeWorkForm from "./EditHomeWorkForm";

const TableToDoList = (props) => {
  console.log(props.homeWorks);
  const [modal, setModal] = useState(false);
  const [currentHomeWork, setCurrentHomeWork] = useState(null);

  const abrirCerrar = () => {
    setModal(!modal);
  };

  return (
    <>
      <table className="table mt-6">
        <thead>
          <tr>
            <th scope="col-6">Nombre</th>
            <th scope="col-6">Descripción</th>
            <th scope="col-6">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.homeWorks.length > 0 ? (
            props.homeWorks.map((homeWork) => (
              <tr key={homeWork.id}>
                <td>{homeWork.name}</td>
                <td>{homeWork.description}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setCurrentHomeWork(homeWork);
                      abrirCerrar();
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      props.deleteHomeWork(homeWork.id);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay tareas</td>
            </tr>
          )}
        </tbody>
      </table>
      <EditHomeWorkForm
        modal={modal}
        setModal={setModal}
        abrirCerrar={abrirCerrar}
        currentHomeWork={currentHomeWork}
        setCurrentHomeWork={setCurrentHomeWork}
      />
    </>
  );
};

export default TableToDoList;
