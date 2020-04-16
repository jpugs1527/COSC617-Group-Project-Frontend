import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function EditForm () {

    <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label> Email Address </Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else
            </Form.Text>
        </Form.Group>
        <Form.Group controlId = "formBasicPassword">
            <Form.Label> Password </Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="primary" type="submit"> Submit </Button>
    </Form>
}

export default EditForm