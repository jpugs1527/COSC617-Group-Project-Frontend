import React, {Component } from 'react'
import { Form, Button, Col } from 'react-bootstrap'

class ProfileForm extends Component {
    constructor (props) {
        super(props);
        
        let user_info = JSON.parse(localStorage.getItem('user_info'));

        this.state = {
            email : user_info.email,
            address : user_info.address,
            city : user_info.city,
            state : user_info.state,
            zip : user_info.zip
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        var field = event.target.attributes.name.nodeValue;
        this.setState({
            [field] : event.target.value
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.functionCallFromParent(this.state);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                {/* <div className="mb-3">
                    <Form.File id="formcheck-api-regular">
                        <Form.Label> Upload a new photo </Form.Label>
                        <Form.File.Input />
                    </Form.File>
                </div> */}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name= "email" 
                        onChange = {this.handleChange}
                        placeholder="johndoe@gmail.com"  
                        aria-describedby="InputGroupPrepend"
                        value = {this.state.email}
                        onChange = {this.handleChange}
                        required
                        />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        type="text" 
                        name = "address" 
                        onChange = {this.handleChange}
                        placeholder="123 Main Street"  
                        aria-describedby="InputGroupPrepend"
                        value = {this.state.address}
                        onChange = {this.handleChange}
                        required
                        />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control value = {this.state.city } name = "city" onChange = {this.handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formCityState">
                        <Form.Label>State</Form.Label>
                        <Form.Control 
                            as="select" 
                            value= {this.state.state}
                            name = "state"
                            onChange = {this.handleChange}
                            required>
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
                            value = { this.state.zip } 
                            name = "zip"
                            onChange = {this.handleChange}
                            required/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit" >
                    Save Changes
                </Button>
            </Form>
        );

    }
}

export default ProfileForm