import React, { useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'

function EditModalPopup () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick ={handleShow}>
            Launch demo Modal
        </Button>
        <Modal show={show} onHide={handleClose}>
            
        </Modal>
    );
}