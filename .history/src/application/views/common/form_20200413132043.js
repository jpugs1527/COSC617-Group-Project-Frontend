import React from 'react'
import { Form, Button, Image, InputGroup } from 'react-bootstrap'

function EditForm () {
    return (
        <Form>
            <div className="mb-3">
                <Form.File id="formcheck-api-regular">
                    <Form.Label> Upload a new photo </Form.Label>
                    <Form.File.Input />
                </Form.File>
            </div>
            <Form.Group controlId="formBasicEmail" autocomplete="off">
                <Form.Label> Username </Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id = "InputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
                <Form.Control 
                    type="text" 
                    placeholder="Username"  
                    aria-describedby="InputGroupPrepend"
                    name="username
                />
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