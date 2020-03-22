import React, { Component } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'
import customData from '../assets/json/sample-cars'

class ViewVehiclePage extends Component {

    constructor(props) {
        super(props);

        this.vehicleId = this.getQueryVariable("vehicle_id");
    }

    getQueryVariable(variable) {
        let params = (new URL(document.location)).searchParams;
        return params.get(variable);
    }

    render() {
        let data = customData.data[this.vehicleId]; 
        let vehicleName = data.year + " " + data.manufacturer + " " + data.model;
        return (
            <div>
                <Header />
                <Helmet>
                    <title>{vehicleName}</title>
                </Helmet>
                <Container><br/>
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>{vehicleName}</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(ViewVehiclePage)