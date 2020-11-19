import React, { useState } from 'react'
import EditHomeWorkForm from './EditHomeWorkForm'

const TableToDoList = (props) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  console.log(props.homeWorks)
  const [currentHomeWork, setCurrentHomeWork] = useState(null)

  const editHomeWork = () => {
    const newData = props.homeWorks.map((homeWork) => {
      console.log(currentHomeWork)
      if (homeWork.id === currentHomeWork.id) {
        return currentHomeWork
      }
      if (currentHomeWork.checked === true) {
        return currentHomeWork
      } else {
        return homeWork
      }
    })
    props.setHomeWorks(newData)
    console.log(newData)
  }

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
              <tr
                key={homeWork.id}
                className={homeWork.checked ? 'homeWork-checked' : ''}
              >
                <td>{homeWork.name}</td>
                <td>{homeWork.description}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setCurrentHomeWork(homeWork)
                      handleShow()
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-secondary ml-2"
                    onClick={() => {
                      props.deleteHomeWork(homeWork.id)
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
        show={show}
        setShow={setShow}
        handleShow={handleShow}
        handleClose={handleClose}
        currentHomeWork={currentHomeWork}
        setCurrentHomeWork={setCurrentHomeWork}
        editHomeWork={editHomeWork}
      />
    </>
  )
}

export default TableToDoList
