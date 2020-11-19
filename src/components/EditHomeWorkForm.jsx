import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

const EditHomeWorkForm = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
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
        <form onSubmit={onSubmit}>
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
                  required={true}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <label>Descripción de la tarea</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="descripción"
                  name="description"
                  required={true}
                  value={
                    props.currentHomeWork && props.currentHomeWork.description
                  }
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  name="checked"
                  type="checkbox"
                  label="Tarea completada"
                  checked={
                    props.currentHomeWork && props.currentHomeWork.checked
                  }
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
             <Button variant="secondary" onClick={props.handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Actualizar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default EditHomeWorkForm;
