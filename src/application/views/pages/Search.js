import React, { Component } from 'react'
import { Card, Container, CardColumns } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Search from '../common/Search'
import VehicleCard from '../common/VehicleCard'

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicleList: []
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "/vehicle/view_all", {
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
                url : "/vehicle?vehicle_id=" + data._id,
                vehicleName : data.year + " " + data.manufacturer + " " + data.model,
                image : data.images[0]
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