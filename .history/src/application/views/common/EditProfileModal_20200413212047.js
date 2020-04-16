import React, { useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import EditForm from './form'
import EditProfilePage from './pages/user/EditProfile'

function EditModalPopup (props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                    <EditForm functionCallFromParent={ props.parentFunction} />
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