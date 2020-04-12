import React, { Component } from 'react'
import { Container, Card, Button, Col, Image, Row } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'
import customData from '../assets/json/sample-cars'

class ViewVehiclePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: "",
            manufacturer: "",
            model: "",
            images: []
        }
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "/vehicle/view_one/" + this.getQueryVariable("vehicle_id"), {
            method: "GET",
            headers : { 
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                year : response[0].year,
                model : response[0].model,
                manufacturer : response[0].manufacturer,
                images : response[0].images
            });
        });
    }

    getQueryVariable(variable) {
        let params = (new URL(document.location)).searchParams;
        return params.get(variable);
    }

    render() {
        console.log(this.state)
        let vehicleName = this.state.year + " " + this.state.manufacturer + " " + this.state.model;

        let cards = [];
        this.state.images.map((data, idx) => {
            return cards.push(
                <Col xs={4} md={4}>
                    <Image src={data} rounded width="260px" height="180px"/>
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
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    {cards}
                                </Row>
                            </Container>
                            <br/>
                            <Card.Title>{vehicleName}</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Rent</Button>
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