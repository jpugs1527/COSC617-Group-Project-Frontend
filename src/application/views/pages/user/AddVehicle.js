import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import VehicleInfo from '../../common/VehicleInfo'

class AddVehiclePage extends Component {
    
    render() {
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Add a Vehicle</title>
                </Helmet>
                <Container><br/>
                    <Card>
                        <Card.Header>Add a Vehicle</Card.Header>
                        <Card.Body>
                            <VehicleInfo />
                        </Card.Body>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(AddVehiclePage)