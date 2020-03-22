import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

class ViewVehiclePage extends Component {
    
    render() {
        
        return (
            <div>
                <Header />
                <Helmet>
                    <title></title>
                </Helmet>
                <Container><br/>
                    <Card>
                        <Card.Header>Vehicles</Card.Header>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(ViewVehiclePage)