import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'

class ViewVehiclePage extends Component {

    render() { 
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Vehicle</title>
                </Helmet>
                <Container>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(ViewVehiclePage)