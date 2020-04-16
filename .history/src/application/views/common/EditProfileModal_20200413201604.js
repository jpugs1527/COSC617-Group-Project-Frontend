import React, { Component, useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import EditForm from './form'

class EditModalPopup extends (props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const parentFunction = (dataFromChild) => {
        console.log(dataFromChild);
    }

    return (
        <>
            <Button variant="primary" onClick ={handleShow}>
                Edit Profile
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Header</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm  functionCallFromParent={parentFunction}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant= "secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModalPopup