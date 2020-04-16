import React, { Component } from 'react'
import { Container, Button, Col, Row, Image, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
//import customData from '../../assets/json/sample-cars-user'
import VehicleCard from '../../common/VehicleCard'


class EditProfilePage extends Component {

    render () {
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Profile Page</title>
                </Helmet>
                <Container>
                    <Row>
                        <Col>
                            <Image src="https://c7.uihere.com/files/136/22/549/user-profile-computer-icons-girl-customer-avatar.jpg" thumbnail />
                        </Col>
                        <Col xs={8}>
                            <Card>
                                <Card.Header> User Profile </Card.Header>
                                <Card.Body>
                                    <Card.Title>Test User123 </Card.Title>
                                    <Card.Text>
                                        Bio: Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Eail Address: test123@gmail.com</ListGroupItem>
                                    <ListGroupItem>Location: San Francisco</ListGroupItem>
                                    <ListGroupItem></ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Button variant="primary" >Edit Profile</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(EditProfilePage)