import React, { Component } from 'react'
import { Container, Col, Row, Image, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
//import customData from '../../assets/json/sample-cars-user'
import VehicleCard from '../../common/VehicleCard'
import EditModalPopup from '../../common/EditProfileModal'
import EditForm from '../../common/form'


class EditProfilePage extends Component {
    constructor() {
        super();

        //all these data shld come from the db
        this.state = {
            userProfile :{
                
            }
            username: "Test 123", 
            bio: "",
            city: "",
            state: "",
            zip: ""

        }

        this.anotherFunction = this.anotherFunction.bind(this);
    }

    anotherFunction(newVal) {
        this.setState(() =>{
            return {
                this.state : newVal
            }
        });
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
                                    <Card.Title>Username: {this.state.username} </Card.Title>
                                    <Card.Text>
                                        Bio: {this.state.bio}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Email Address: test123@gmail.com</ListGroupItem>
                                    <ListGroupItem>City: {this.state.city} </ListGroupItem>
                                    <ListGroupItem>State: {this.state.state} </ListGroupItem>
                                    <ListGroupItem>Zip code: {this.state.zip} </ListGroupItem>
                                    <ListGroupItem>Gender: Male</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <EditModalPopup parentFunction={this.anotherFunction} />
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