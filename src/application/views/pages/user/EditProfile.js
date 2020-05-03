import React, { Component } from 'react'
import { Container, Col, Row, Image, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import ProfileModal from '../../common/ProfileModal'
import $ from 'jquery'

class EditProfilePage extends Component {
    constructor() {
        super();

        this.user_info = JSON.parse(localStorage.getItem('user_info'));

        //all these data shld come from the db
        this.state = {
            username: this.user_info.username, 
            email: this.user_info.email,
            address: this.user_info.address,
            city: this.user_info.city,
            state: this.user_info.state,
            zip: this.user_info.zip,
            _id: this.user_info._id 
        }

        this.submitModal = this.submitModal.bind(this);
    }

    submitModal(newVal) {
        fetch(process.env.REACT_APP_API_URL + "/user/edit/" + this.user_info._id, {
            method: "put",
            body: JSON.stringify(newVal),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            let new_user_info = response.value;
            localStorage.setItem("user_info", JSON.stringify(new_user_info));
            this.setState(new_user_info);
            $("#profileModalCloseButton").trigger('click');
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
                    <br/>
                    <Row>
                        <Col>
                            <Image 
                                src="https://c7.uihere.com/files/136/22/549/user-profile-computer-icons-girl-customer-avatar.jpg" 
                                thumbnail   
                            />
                        </Col>
                        <Col xs={8}>
                            <Card>
                                <Card.Header> {this.state.username} </Card.Header>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Email Address: {this.state.email}</ListGroupItem>
                                    <ListGroupItem>Address: {this.state.address}</ListGroupItem>
                                    <ListGroupItem>City: {this.state.city}</ListGroupItem>
                                    <ListGroupItem>State: {this.state.state}</ListGroupItem>
                                    <ListGroupItem>Zip: {this.state.zip}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <ProfileModal parentFunction={this.submitModal} />
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