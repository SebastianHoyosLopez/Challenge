import React from 'react'

const TableToDoList = (props) => {
  console.log(props.homeWorks)
  return (
    <table className="table mt-6">
      <thead>
        <tr>
          <th scope="col-6">Nombre</th>
          <th scope="col-6">Descripción</th>
        </tr>
      </thead>
      <tbody>
        {props.homeWorks.length > 0 ? (
          props.homeWorks.map((homeWork) => (
            <tr key={homeWork.id}>
            <td>{homeWork.name}</td>
            <td>{homeWork.description}</td>
          </tr>
          ))
        ): (
          <tr>
            <td colSpan={3}>No hay tareas</td>
          </tr>
        )}          
      </tbody>
    </table>
  )
}

export default TableToDoList
