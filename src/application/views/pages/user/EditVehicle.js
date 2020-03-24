import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import VehicleInfo from '../../common/VehicleInfo'
import customData from '../../assets/json/sample-cars-user'

class EditVehiclePage extends Component {

    constructor(props) {
        super(props);
        this.vehicleId = this.getQueryVariable("vehicle_id");

        if (!customData.data[this.vehicleId]) {
            window.location.replace('/user/vehicle/view');
        }
    }

    getQueryVariable(variable) {
        let params = (new URL(document.location)).searchParams;
        return params.get(variable);
    }
    
    render() {
        let vehicleInfo = customData.data[this.vehicleId];

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
                            <VehicleInfo info={vehicleInfo}/>
                        </Card.Body>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(EditVehiclePage)