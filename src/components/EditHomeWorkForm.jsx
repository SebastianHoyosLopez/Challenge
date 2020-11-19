import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditHomeWorkForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    props.handleClose();
    props.editHomeWork();
  };

  const handleInputChange = (e) => {
    //const name = e.target.name;
    const { name, value, checked, type } = e.target;
    props.setCurrentHomeWork({
      ...props.currentHomeWork,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <Modal show={props.show}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <Modal.Title>Editar Tarea</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-row">
              <div className="col">
                <label>Nombre de la tarea</label>
                <input
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
                <input
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
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  name="checked"
                  type="checkbox"
                  label="Tarea completada"
                  checkep="false"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Actualizar
            </Button>
            <Button variant="secondary" onClick={props.handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default EditHomeWorkForm;
