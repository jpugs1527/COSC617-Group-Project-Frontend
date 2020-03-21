import React, { Component } from 'react'
import { Col, Container, Row, Form, FormControl, Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import $ from "jquery"
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import { WelcomeActions } from '../../actions'
import Header from '../common/Header'
import Footer from '../common/Footer'
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
                            <Form onSubmit={this.handleSubmit} inline>
                                <FormControl type="text" placeholder="Where" className="space" name="where" onChange={this.handleChange} required/>
                                <DateRangePicker startDate={this.state.from} endDate={this.state.to} onHide={this.hideEvent}>
                                    <Button type="button" variant="light" className="space">{this.state.from} - {this.state.to}</Button>
                                </DateRangePicker>
                                <Button type="submit" variant="primary">Search</Button>
                            </Form>
                        </Row>
                    </Container>
                </div>
                <p id="data"></p>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(WelcomePage)