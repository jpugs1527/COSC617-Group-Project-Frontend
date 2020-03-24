import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import { WelcomeActions } from '../../actions'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Search from '../common/Search'
import ModalPopup from '../common/ModalPopup'
import policies from '../assets/json/policies'

class WelcomePage extends Component {

    test = () => {
        this.props.dispatch(WelcomeActions.test({name: 'MERN.JS'}))
    }

    render() {
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Welcome</title>
                </Helmet>
                <div id="homepage">
                    <Container id="homepageContainer">
                        <Row className="justify-content-md-center">
                            <div className="welcomeH1 min-padding">Rental cars - the easy way.</div>
                        </Row>
                        <Row className="justify-content-md-center min-padding">
                            <Search/>
                        </Row>
                        <Row className="justify-content-md-center min-padding" id="policyRow">
                            <ModalPopup modalData={policies}/>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(WelcomePage)