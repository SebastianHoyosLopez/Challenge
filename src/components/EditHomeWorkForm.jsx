import React from "react";
import { Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditHomeWorkForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (datainf) => {
    console.log(datainf);
    props.abrirCerrar();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.setCurrentHomeWork({ ...props.currentHomeWork, [name]: value });
  };

  return (
    <div>
      <Modal show={props.modal}>
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
                  value={props.currentHomeWork && props.currentHomeWork.name}
                  onChange={handleInputChange}
                  ref={register({
                    required: { value: true, message: "Campo Requerido" },
                  })}
                />
                <span className="text-danger text-small">
                  {errors?.name?.message}
                </span>
              </div>
              <div className="col">
                <label>Descripción de la tarea</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="descripción"
                  name="description"
                  value={
                    props.currentHomeWork && props.currentHomeWork.description
                  }
                  onChange={handleInputChange}
                  ref={register({
                    required: { value: true, message: "Campo Requerido" },
                  })}
                />
                <span className="text-danger text-small">
                  {errors?.description?.message}
                </span>
              </div>
            </div>
            <div>
              <button
                className="btn btn-primary my-2"
                onClick={() => props.editHomeWork()}
              >
                Actualizar
              </button>
              <button
                className="btn btn-warning"
                onClick={() => props.setModal(props.modal)}
              >
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
