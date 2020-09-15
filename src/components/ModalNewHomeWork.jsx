import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const NewHomeWork = (props) => {
  const [modal, setmodal] = useState(false)
  const { register, errors, handleSubmit } = useForm()

  const abrirCerrar = () => {
    setmodal(!modal)
  }

  const onSubmit = (data, e) => {
    console.log(data)
    props.addHomeWork(data)
    abrirCerrar()
    //limpiar campos
    e.target.reset()
  }

  return (
    <div>
      <Button className="btn btn-primary" onClick={() => abrirCerrar()}>
        Crear Tarea
      </Button>

      <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>Ingrese la Tarea a la Tabla</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="col">
                <label>Nombre de la tarea</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="name"
                  ref={register({
                    required: { value: true, message: 'Campo Requerido' },
                  })}
                />
                <div>{errors?.name?.message}</div>
              </div>
              <div className="col">
                <label>Descripción de la tarea</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="descripción"
                  name="description"
                  ref={register({
                    required: { value: true, message: 'Campo Requerido' },
                  })}
                />
                <div>{errors?.description?.message}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary my-2">Agregar</button>
              <button className="btn btn-warning" onClick={() => abrirCerrar()}>
                Cancelar
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default NewHomeWork
