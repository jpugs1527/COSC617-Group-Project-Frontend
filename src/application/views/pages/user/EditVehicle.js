import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import VehicleInfo from '../../common/VehicleInfo'

class EditVehiclePage extends Component {

    getQueryVariable(variable) {
        let params = (new URL(document.location)).searchParams;
        return params.get(variable);
    }
    
    render() {

        return (
            <div>
                <Header />
                <Helmet>
                    <title>Edit Vehicle</title>
                </Helmet>
                <Container><br/>
                    <Card>
                        <Card.Header>Edit Vehicle</Card.Header>
                        <Card.Body>
                            <VehicleInfo info={this.getQueryVariable("vehicle_id")}/>
                        </Card.Body>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(EditVehiclePage)