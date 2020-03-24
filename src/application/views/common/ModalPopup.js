import React, { useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'

function ModalPopup(arg1) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let json = arg1.modalData[0];
    let message = [];
    json.content.map((data, idx) => {
        return message.push(
            <Row key={idx}>
                <div id="modalDiv">
                    <h5>{data.title}</h5>
                    <p>{data.text}</p>
                </div>
            </Row>
        );
    });

    return (
        <>
        <Button variant={json.buttonColor} onClick={handleShow}>
            {json.mainTitle}
        </Button>

        <Modal show={show} size="lg" onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{json.mainTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalPopup;