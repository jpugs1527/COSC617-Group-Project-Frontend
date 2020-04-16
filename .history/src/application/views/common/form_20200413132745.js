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
            <Form.Group controlId="valdiationFormikUsername" autocomplete="off">
                <Form.Label> Username </Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id = "InputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control 
                    type="text" 
                    placeholder="Username"  
                    aria-describedby="InputGroupPrepend"
                    name="username"
                    />
                </InputGroup>    
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
            <Button variant="primary" type="submit"> Submit </Button>
        </Form>
    );
}

export default EditForm