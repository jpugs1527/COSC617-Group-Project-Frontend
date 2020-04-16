import React, { Component } from 'react'
import { Container, Col, Row, Image, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
//import customData from '../../assets/json/sample-cars-user'
import VehicleCard from '../../common/VehicleCard'
import EditModalPopup from '../../common/EditProfileModal'
import EditForm from ''


class EditProfilePage extends Component {
    constructor(props) {
        super(props);
        //this.parentFunction
    }

    parentFunction = (dataFromChild) => {
        console.log(dataFromChild);
    }

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
                                    <Card.Title>
                                        <EditModalPopup functionCallFromParent={this.parentFunction.bind(this) } />
                                    </Card.Title>
                                    <Card.Text>
                                        Bio: Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Email Address: test123@gmail.com</ListGroupItem>
                                    <ListGroupItem>City: San Francisco</ListGroupItem>
                                    <ListGroupItem>State: California</ListGroupItem>
                                    <ListGroupItem>Zip code: 94133 </ListGroupItem>
                                    <ListGroupItem>Gender: Male</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <EditModalPopup/>
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