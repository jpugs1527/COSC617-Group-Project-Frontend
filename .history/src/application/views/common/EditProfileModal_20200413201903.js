import React, { Component, useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import EditForm from './form'

class EditModalPopup extends Component () {
    constructor () {
        super ();

        const [show, setShow] = useState(false);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.parentFunction = this.parentFunction.bind(this);
    }

    const [show, setShow] = useState(false);

    handleClose = () => setShow(false);
    handleShow = () => setShow(true);

    parentFunction = (dataFromChild) => {
        console.log(dataFromChild);
    }

    render () {

    }
}

export default EditModalPopup