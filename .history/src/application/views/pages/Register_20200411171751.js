import React, { Component } from 'react'
import { Alert, Card, Container, Col, Row, Form, FormControl, Button} from 'react-bootstrap'
import $ from "jquery"
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'

class RegisterPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            email : '',
            password : '',
            confirm_password : '',
            isSubmitting: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isSubmitting: true });

        fetch(process.env.REACT_APP_API_URL {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data => {
            if (data.ok == false) {
                $(".message").html("Failed to register user").show();
            } else {
                $(".message").html("Successfully registered user").show();
                $("#registerForm input").val("");
            }
        });
    }

    render() { 
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Registration</title>
                </Helmet>
                <Container>
                    <br/>
                    <Card>
                        <Card.Header>Register</Card.Header>
                        <Card.Body>
                            <Alert variant="secondary" className="message"></Alert>
                            <Form onSubmit={this.handleSubmit} id="registerForm">
                                <Row>
                                    <Col sm={8}>
                                        <FormControl type="text" placeholder="Username" name="username"
                                                value={this.state.username} onChange={this.handleChange} required/><br/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8}>
                                        <FormControl type="email" placeholder="Email" name="email"
                                                value={this.state.email} onChange={this.handleChange} /><br/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8}>
                                        <FormControl type="password" placeholder="Password" name="password"
                                                value={this.state.password} onChange={this.handleChange} required/><br/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8}>
                                        <FormControl type="password" placeholder="Confirm Password" name="confirm_password"
                                                value={this.state.confirm_password} onChange={this.handleChange} required/><br/>
                                    </Col>
                                </Row>
                                <Button type="submit" variant="outline-primary">Register</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(RegisterPage)