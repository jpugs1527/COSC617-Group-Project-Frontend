import React, { Component } from 'react'
import { Card, Container, CardColumns } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Search from '../common/Search'

class SearchPage extends Component {
    render() { 
        const image = require('../assets/images/car.jpg');
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Available Cars</title>
                </Helmet>
                <Container><br/>
                    <Search/><br/>
                    <CardColumns>
                        <Card border="dark" className="carListCards">
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark" className="carListCards">
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark" className="carListCards">
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark" className="carListCards">
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark" className="carListCards">
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(SearchPage)