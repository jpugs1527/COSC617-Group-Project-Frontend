import React, {Component} from 'react'
import { Form, Button, Image, InputGroup, Col, FormControl, FormFile } from 'react-bootstrap'

class EditForm extends Component {
    constructor () {
        super();
        this.handlChange
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
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
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formCityState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" value="Choose...">
                            <option>Choose...</option>
                            <option>California</option>
                            <option>Maryland</option>
                            <option>New York</option>
                            <option>Texas</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
            </Form>
        );

    }
}

export default EditForm