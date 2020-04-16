import React, { Component } from 'react'
import { Container, Card, CardColumns } from 'react-bootstrap'
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
                    <h3> Profile Page </h3>
                <Container>
                    <Card>
                        <Card.Header> Precious Profile </Card.Header>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            Card Body
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(EditProfilePage)