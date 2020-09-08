import React, { useState } from 'react'
import Modal from 'react-modal'
import './styles/styles-to-do-list.css'

function Todolist() {
  const [modal, setmodal] = useState(false)
  const [textName, setTextName] = useState('')

  const abrirCerrar = () => {
    setmodal(!modal)
  }

  return (
    <div className="container">
      <div className="row">
        <h3 className="pt-2 text-center">Lista De Tareas</h3>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={() => abrirCerrar()}
        >
          Crear tarea
        </button>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-5"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Modal isOpen={modal} className="modal-info mx-5 my-5">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Ingresa La Información
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => abrirCerrar()}
            >X</button>
          </div>
          <div className="modal-body">
            Nombre
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="nombre"
              value={textName}
              onChange={(e) => {
                setTextName(e.target.value)
              }}
            />
            <div className="input-group my-5">
              <div className="input-group-prepend">
                <span className="input-group-text">Tarea</span>
              </div>
              <textarea
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => abrirCerrar()}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Todolist
