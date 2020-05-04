import React, { Component } from 'react'
import { Card, Container, CardColumns } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Search from '../common/Search'
import VehicleCard from '../common/VehicleCard'
const axios = require("axios");

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicleList: []
        };
    }

    componentDidMount() {
        console.log(new URLSearchParams(window.location.search).get("location"));
        var searchParams = new URLSearchParams(window.location.search);
        var query = {
            location: searchParams.get("location"),
            from: searchParams.get("from"),
            to: searchParams.get("to")
        }
        axios ({
            url: process.env.REACT_APP_API_URL + "/vehicle/search",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            data: query
        })
        .then(res => {
            this.setState({vehicleList : res.data})
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        let cards = [];
        this.state.vehicleList.map((data, idx) => {        
            let vehicleData = {
                url : "/vehicle?vehicle_id=" + data._id,
                vehicleName : data.year + " " + data.manufacturer + " " + data.model,
                cost : data.cost,
                location: data.location,
                image : data.images[0],
                page : "searchView"
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