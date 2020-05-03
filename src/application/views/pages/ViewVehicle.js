import React, { Component } from 'react'
import { Container, Card, Col, Image, Row, Button } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'
import RentModal from '../common/RentModal'
import Authenticate from '../common/Auth'
import axios from 'axios'

class ViewVehiclePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: "",
            manufacturer: "",
            model: "",
            images: []
        }

        this.isLoggedIn = false;

        Authenticate().then((defs)=>{
            this.isLoggedIn = defs.data.isLoggedIn;
        });
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + "/rent/view_all/" + this.getQueryVariable("vehicle_id"))
        .then(res => {
            localStorage.setItem('current_history', JSON.stringify(res.data));
        });
        
        axios.get(process.env.REACT_APP_API_URL + "/vehicle/view_one/" + this.getQueryVariable("vehicle_id"))
        .then(res => {
            if (res.data[0]) {
                this.setState({
                    year : res.data[0].year,
                    model : res.data[0].model,
                    manufacturer : res.data[0].manufacturer,
                    images : res.data[0].images,
                    location : res.data[0].location,
                    cost : res.data[0].cost
                });
            } else {
                window.location.href = "/";
            }
        });
    }

    rentVehicle() {
        var searchParams = new URLSearchParams(window.location.search);
        var vehicleID = {
            vehicle: searchParams.get("vehicle_id")
        }

        axios ({
            url: process.env.REACT_APP_API_URL + "/vehicle/rent",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            data: vehicleID
        })
        .then(res => {
            res.status(200);
            res.redirect("/");
        })
        .catch(err => {
            console.log(err);
        });
    }

    getQueryVariable(variable) {
        let params = (new URL(document.location)).searchParams;
        return params.get(variable);
    }

    render() {
        let vehicleName = this.state.year + " " + this.state.manufacturer + " " + this.state.model;

        let cards = [];
        this.state.images.map((data, idx) => {
            return cards.push(
                <Col xs={4} md={4} key={idx}>
                    <Image src={data} rounded width="260px" height="180px" />
                </Col>
            );
        });

        return (
            <div>
                <Header />
                <Helmet>
                    <title>{vehicleName}</title>
                </Helmet>
                <Container><br/>
                    <Card>
                        <Card.Header>{vehicleName}</Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    {cards}
                                </Row>
                            </Container>
                            <br/>
                            <Card.Text>
                                Location: {this.state.location}
                            </Card.Text>
                            <Card.Text>
                                Rent this vehicle for ${this.state.cost} a day
                            </Card.Text>
                            {this.isLoggedIn == true ? 
                                <RentModal parentFunction={this.submitModal} />
                            : 
                                <strong>You must be logged in to rent this vehicle</strong>
                            }
                            {/* { this.isLoggedIn == true ?
                                <Button variant="primary" onClick={this.rentVehicle}>Rent</Button>
                            :
                                <p>Please log in to rent this vehicle</p>
                            } */}
                        </Card.Body>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(ViewVehiclePage)