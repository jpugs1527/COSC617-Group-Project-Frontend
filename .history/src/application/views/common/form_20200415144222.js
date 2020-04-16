import React, {Component } from 'react'
import { Form, Button, Image, InputGroup, Col } from 'react-bootstrap'

class EditForm extends Component {
    constructor (props) {
        super(props);
        
        //Let's get these variables from the db of the user
        let username = "";
        let bio = "";
        let city = "";
        let state = "";
        let zip = "";

        this.state = {

            userProfile : {
                username : username,
                bio : bio,
                city : city,
                state :state,
                zip : zip
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        var field = event.target.attributes.name.nodeValue;
        //console.log(field)
        this.setState({
            [field] : event.target.value
        });
        //this.props.functionCallFromParent(this.state.userProfile)
    }

    handleSubmit (event) {
        event.preventDefault();
        //this.setState({ [field] : event.target.value });
        this.props.functionCallFromParent(this.state.userProfile);
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
                    <Form.Control 
                        as="textarea" 
                        rows="3" 
                        value= {this.state.bio} 
                        name = "bio" 
                        onChange = {this.handleChange}/>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control value = {this.state.userProfile.city } name = "city" onChange = {this.handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formCityState">
                        <Form.Label>State</Form.Label>
                        <Form.Control 
                            as="select" 
                            value= {this.state.userProfile.state}
                            name = "state"
                            onChange = {this.handleChange}>
                            <option>Choose...</option>
                            <option>California</option>
                            <option>Maryland</option>
                            <option>New York</option>
                            <option>Texas</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control 
                            value = { this.state.userProfile.zip } 
                            name = "zip"
                            onChange = {this.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit" >
                    Save Changes
                </Button>
            </Form>
        );

    }
}

export default EditForm