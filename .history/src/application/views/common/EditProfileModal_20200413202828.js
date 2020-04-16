import React, { Component, useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import EditForm from './form'

class EditModalPopup extends Component  {
    constructor () {
        super ();

        const [show, setShow] = useState(false);
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.parentFunction = this.parentFunction.bind(this);
    }

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);

    parentFunction = (dataFromChild) => {
        console.log(dataFromChild);
    }

    render () {
        return (
            <>
                <Button variant="primary" onClick ={this.handleClose}>
                    Edit Profile
                </Button>
                <Modal show={this.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal Header</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditForm  functionCallFromParent={this.parentFunction}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant= "secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default EditModalPopup