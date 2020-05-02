import React, { Component } from 'react'
import { Alert, Card, Container, Col, Row, Form, FormControl, Button} from 'react-bootstrap'
import $ from "jquery"
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'

class ForgotPage extends Component {
  
  
   render(){
       return(
        <div>
        <Header />
        <Helmet>
            <title>Password Reset</title>
        </Helmet>
        <Container>
            <br/>
            <Card>
                <Card.Header>Pasword Reset</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit} id="resetForm">
                        <Row>
                            <Col sm={8}>
                                <FormControl type="text" placeholder="Username" name="username"
                                        /><br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <FormControl type="email" placeholder="Email" name="email"
                                        /><br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <FormControl type="password" placeholder="Old Password" name="old_assword"
                                        /><br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <FormControl type="password" placeholder="New Password" name="new_password"
                                        /><br/>
                            </Col>
                        </Row>
                        <Button type="submit" variant="outline-primary">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        <Footer />
    </div>
       )
   }
    
}
export default connect(null)(ForgotPage)