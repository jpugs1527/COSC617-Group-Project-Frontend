import React, { Component } from 'react'
import { Container, Card, CardColumns } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import VehicleCard from '../../common/VehicleCard'

const userId = JSON.parse(localStorage.getItem('user_info'))._id;

class ViewVehiclePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicleList: []
        };
    }
    
    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "/vehicle/view_all/" + userId, {
            method: "GET",
            headers : { 
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({vehicleList : response});
        });
    }

    render() {

        let cards = [];
        this.state.vehicleList.map((data, idx) => {        
            let vehicleData = {
                url : "/user/vehicle/edit?vehicle_id=" + data._id,
                vehicleName : data.year + " " + data.manufacturer + " " + data.model,
                cost: data.cost,
                location: data.location,
                image : data.images[0]
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