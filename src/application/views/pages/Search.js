import React, { Component } from 'react'
import { Card, Container, CardColumns } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Search from '../common/Search'
import customData from '../assets/json/sample-cars'
import VehicleCard from '../common/VehicleCard'

class SearchPage extends Component {

    render() { 

        let cards = [];
        customData.data.map((data, idx) => {        
            let vehicleData = {
                url : "/vehicle?vehicle_id=" + idx,
                vehicleName : data.year + " " + data.manufacturer + " " + data.model,
                image : require('../assets/images/car.jpg')
            };

            return cards.push(
                <VehicleCard data={vehicleData} key={idx}/>
            );
        });

        return (
            <div>
                <Header />
                <Helmet>
                    <title>Search Results</title>
                </Helmet>
                <Container><br/>
                    <Card>
                        <Card.Header>Search Results</Card.Header>
                        <Card.Body>
                            <Search/><br/>
                            <p>Select a vehicle you would like to rent.</p>
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

export default connect(null)(SearchPage)