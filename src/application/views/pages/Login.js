import React, { Component } from 'react'
import { Card, Container, Col, Row, Form, FormControl, Button} from 'react-bootstrap'
import $ from "jquery"
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'

class LoginPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
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
        $("#data").html(JSON.stringify(this.state));
    }

    render() { 
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <br/>
                <Container>
                    <p id="data"></p>
                    <Card>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col sm={8}>
                                        <FormControl type="text" placeholder="Username" name="username"
                                                value={this.state.username} onChange={this.handleChange} required/><br/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8}>
                                        <FormControl type="password" placeholder="Password" name="password"
                                                value={this.state.password} onChange={this.handleChange} required/><br/>
                                    </Col>
                                </Row>
                                <Button type="submit" variant="outline-primary">Login</Button>
                                <a href="#test" className="space-on-left">Forgot Password?</a>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(LoginPage)