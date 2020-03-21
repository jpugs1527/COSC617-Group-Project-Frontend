import React, { Component } from 'react'
import { Container, Row, Form, FormControl, Button} from 'react-bootstrap'
import $ from "jquery"
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import { WelcomeActions } from '../../actions'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Search from '../common/Search'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-daterangepicker/daterangepicker.css'

class WelcomePage extends Component {

    test = () => {
        this.props.dispatch(WelcomeActions.test({name: 'MERN.JS'}))
    }

    constructor(props) {
        super(props);
        var date = new Date();

        this.state = {
            where : '',
            from : this.formatDate(date),
            to : this.formatDate(new Date(date.setDate(date.getDate() + 3)))
        };

        this.hideEvent = this.hideEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    formatDate(givenDate) {
        return (givenDate.getMonth() + 1) + "/"+givenDate.getDate() + "/" + givenDate.getFullYear();
    }

    hideEvent(event, picker) {
        this.setState({
            'from' : picker.startDate.format('MM/DD/YYYY'),
            'to' : picker.endDate.format('MM/DD/YYYY')
        });
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        window.location.replace("/search?" +$.param(this.state));
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
                            <div className="welcomeH1 text-primary min-padding">Rental cars - the easy way.</div>
                        </Row>
                        <Row className="justify-content-md-center min-padding">
                            <Search object={this}/>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(WelcomePage)