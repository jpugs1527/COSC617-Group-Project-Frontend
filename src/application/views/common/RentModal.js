import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import RentForm from './RentForm'

function RentModalPopup (props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick ={handleShow}>
                Rent
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Rent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RentForm functionCallFromParent= {props.parentFunction} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant= "secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RentModalPopup