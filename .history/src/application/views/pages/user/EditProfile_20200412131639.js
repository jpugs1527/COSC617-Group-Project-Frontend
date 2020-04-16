import React, { Component } from 'react'
import { Container, Col, Row, Image, Card, ListGroup } from 'react-bootstrap'
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
                        <Col sm= {8} sm={8}>
                            <Card>
                                <Card.Header> User Profile </Card.Header>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                        Card Body
                                </Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>Username: pemakenemi56 </ListGroup.Item>
                                    <ListGroup.Item>Email: pemakenemi56@gmail.com </ListGroup.Item>
                                </ListGroup>
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