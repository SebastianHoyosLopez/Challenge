import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {
  const [modal, setmodal] = useState(false)
  const { register, errors, handleSubmit } = useForm()

  const abrirCerrar = () => {
    setmodal(!modal)
  }

  const onSubmit = (data, e) => {
    console.log(data)

    props.addUser(data)
    // limpiar campos
    e.target.reset()
  }

  return (
    <div>
      <Button
        className="btn btn-primary my-2 mx-2"
        onClick={() => abrirCerrar()}
      >
        Crear tarea
      </Button>

      <Modal show={modal} className="mt-5">
        <Modal.Header>
          <Modal.Title>Ingresa La Información Solicitada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="col">
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="userName"
                  name="username"
                  ref={register({
                    required: { value: true, message: 'Campo Requerido' },
                  })}
                />
                <div>{errors?.username?.message}</div>
              </div>
              <button className="btn btn-primary">Agregar</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-warning my-2 mx-2"
            onClick={() => abrirCerrar()}
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddUserForm
