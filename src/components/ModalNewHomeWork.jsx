import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const NewHomeWork = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();
    props.addHomeWork({
      name: name,
      description: description,
      checked: false
    });
    handleClose();
    e.target.reset();
  };

  return (
    <>
      <Button className="btn btn-primary btn-lg" onClick={handleShow}>
        Create Tarea
      </Button>
      <Modal show={show}>
        <form onSubmit={onSubmit}>
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
                  value={name}
                  onChange={e => 
                    setName(e.target.value)
                  } 
                />
              </div>
              <div className="col-6">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Description"
                  name="description"
                  required="required"
                  value={description}
                  onChange={e => 
                    setDescription(e.target.value)
                  } 
                />
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
