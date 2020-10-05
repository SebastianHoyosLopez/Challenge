import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditHomeWorkForm = (props) => {
  const [modal, setmodal] = useState(false);
  const { register, errors, handleSubmit } = useForm();

  const abrirCerrar = () => {
    setmodal(!modal);
  };

  const onSubmit = (data, e) => {
    console.log(data);
    abrirCerrar();
    //limpiar campos
    e.target.reset();
  };

  return (
    <div>
      <Button className="btn btn-primary" onClick={() => abrirCerrar()}>
        Editar
      </Button>

      <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="col">
                <label>Nombre de la tarea</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="name"
                  ref={register({
                    required: { value: true, message: "Campo Requerido" },
                  })}
                />
                <div>{errors?.name?.message}</div>
              </div>
              <div className="col">
                <label>Descripción de la tarea</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="descripción"
                  name="description"
                  ref={register({
                    required: { value: true, message: "Campo Requerido" },
                  })}
                />
                <div>{errors?.description?.message}</div>
              </div>
            </div>
            <div>
              <button className="btn btn-primary my-2">Guardar Cambios</button>
              <button className="btn btn-warning" onClick={() => abrirCerrar()}>
                Cancelar
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditHomeWorkForm;
