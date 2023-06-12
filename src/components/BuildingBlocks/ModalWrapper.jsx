import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export const ModalWrapper = ({ heading, content, img, show, handleClose }) => {
  const [showModal, setShowModal] = useState(show);
  useEffect(() => {}, [showModal]);
  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center">
          {heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ overflowY: "scroll" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src={img}
            className="blog-inner-img"
            style={{
              width: "200px",
              height: "170px",
              borderRadius: "4px",
            }}
          />
        </div>
        <br />
        <div className="container">
          <p>{content}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWrapper;
