import React, { Component } from 'react'
import { Card, Container, CardColumns } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Search from '../common/Search'
import customData from '../assets/json/sample-cars';

class SearchPage extends Component {

    render() { 
        const image = require('../assets/images/car.jpg');
        let cards = [];

        customData.data.map((data, idx) => (
            cards.push(
                <Card
                    border="dark"
                    key={idx}>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                    <Card.Title>{data.year} {data.manufacturer} {data.model}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        <br/><br/>
                        <a href="#">View</a>
                    </Card.Text>
                    </Card.Body>
                </Card>
            )
          ));

        return (
            <div>
                <Header />
                <Helmet>
                    <title>Available Cars</title>
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