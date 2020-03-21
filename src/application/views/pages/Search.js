import React, { Component } from 'react'
import { Card, Container, Col, Row, Form, FormControl, Button} from 'react-bootstrap'
import $ from "jquery"
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../common/Header'
import Footer from '../common/Footer'

class CarsListViewPage extends Component {

    render() { 
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Available Cars</title>
                </Helmet>
                <Container>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(CarsListViewPage)