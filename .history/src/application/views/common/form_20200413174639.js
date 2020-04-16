import React, {Component} from 'react'
import { Form, Button, Image, InputGroup, Col } from 'react-bootstrap'

class EditForm extends Component {
    constructor (props) {
        super(props);
        
        let username = "";
        let bio = "";
        let city = "";
        let state = "";
        let zip = "";

        this.state = {
            username : username,
            bio : bio,
            city : city,
            state : state,
            zip : zip
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        var field = event.target.attributes.name.nodeValue;
        this.setState({ [field] : event.target.value });
        //console.log(event.target.value);
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.functionCallFromParent("Hello From Child");
        //alert('submitted');
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
                <Form.Group controlId="valdiationFormikUsername" autoComplete="off">
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
                        value = {this.state.username}
                        onChange = {this.handleChange}
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