import React from 'react'
import { Form, Button, Image } from 'react-bootstrap'

function EditForm () {
    return (
        <Form>
            <Image src="https://c7.uihere.com/files/136/22/549/user-profile-computer-icons-girl-customer-avatar.jpg" thumbnail />
            <Form.Group controlId="formBasicEmail" autocomplete="off">
            
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
    );
}

export default EditForm