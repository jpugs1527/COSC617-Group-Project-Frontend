import React, { Component } from 'react'
import { Card, Container, CardColumns } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Search from '../common/Search'
import customData from '../assets/json/sample-cars'
import $ from "jquery"

class SearchPage extends Component {

    constructor(props) {
        super(props);
    }

    render() { 
        const image = require('../assets/images/car.jpg');
        let cards = [];

        customData.data.map((data, idx) => {
            let url = "/vehicle?vehicle_id=" + idx;
            let vehicleName = data.year + " " + data.manufacturer + " " + data.model;
            cards.push(
                <Card
                    className="vehicleCards"
                    border="dark"
                    key={idx}
                    data-url={url}
                    onClick={() => window.location.replace(url)}>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>{vehicleName}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            <br/><br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        });

        return (
            <div>
                <Header />
                <Helmet>
                    <title>Search</title>
                </Helmet>
                <Container><br/>
                    <Search/><br/>
                    <CardColumns>
                        {cards}
                    </CardColumns>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(SearchPage)