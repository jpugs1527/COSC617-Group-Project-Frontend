import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ProfileForm from './ProfileForm'

function ProfileModalPopup (props) {
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
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProfileForm functionCallFromParent= {props.parentFunction} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant= "secondary" onClick={handleClose} id="profileModalCloseButton">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProfileModalPopup