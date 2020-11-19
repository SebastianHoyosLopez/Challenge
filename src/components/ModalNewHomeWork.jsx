import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const NewHomeWork = (props) => {
  const [show, setShow] = useState(false);
  const { register, errors, handleSubmit } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data, e) => {
    props.addHomeWork(data);
    handleClose();
    //limpiar campos
    e.target.reset();
  };

  return (
    <>
      <Button className="btn btn-primary btn-lg" onClick={handleShow}>
        Create Tarea
      </Button>
      <Modal show={show}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <Modal.Title>New Homework</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-row">
              <div className="col-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Name"
                  name="name"
                  required="required"
                />
              </div>
              <div className="col-6">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Description"
                  name="description"
                  ref={register({
                    required: { value: true, message: "Required field" },
                  })}
                />
                <div>{errors?.description?.message}</div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
export default NewHomeWork;
