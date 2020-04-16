import React, { Component } from 'react'
import { Container, Card, CardColumns } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import customData from '../../assets/json/sample-cars-user'
import VehicleCard from '../../common/VehicleCard'

class ViewVehiclePage extends Component {
    
    render() {

        let cards = [];
        customData.data.map((data, idx) => {        
            let vehicleData = {
                url : "/user/vehicle/edit?vehicle_id=" + idx,
                vehicleName : data.year + " " + data.manufacturer + " " + data.model,
                image : require('../../assets/images/car.jpg')
            };

            return cards.push(
                <VehicleCard data={vehicleData} key={idx}/>
            );
        });

        let message = "Edit your vehicles information and availability.";
        if (cards.length === 0) {
            message = "You have not added a vehicle.";
        }
        
        return (
            <div>
                <Header />
                <Helmet>
                    <title>View Vehicles</title>
                </Helmet>
                <Container><br/>
                    <Card>
                        <Card.Header>Your Vehicles</Card.Header>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <p>{message}</p>
                            <CardColumns>
                                {cards}
                            </CardColumns>
                        </Card.Body>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(ViewVehiclePage)