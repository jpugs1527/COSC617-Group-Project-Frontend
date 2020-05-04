import React, { Component } from 'react'
import { Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-daterangepicker/daterangepicker.css'
const axios = require('axios');
require('dotenv').config();

class Search extends Component {

    constructor(props) {
        super(props);
        var date = new Date();
        this.today = this.formatDate(date);
        var from_date = this.today;
        var to_date = this.formatDate(new Date(date.setDate(date.getDate() + 3)));

        this.state = {
            location : this.getQueryVariable('location') ? this.getQueryVariable('location') : "",
            from : this.getQueryVariable('from') ? this.getQueryVariable('from') : from_date,
            to : this.getQueryVariable('to') ? this.getQueryVariable('to') : to_date
        };

        this.hideEvent = this.hideEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Code to get user location and pre populate the location search field if they allow access to location
    // Does not work as after implementation I realized we need an API key that is not free :(
    // componentDidMount() {
    //     console.log("component mounted")
    //     var currLocation;
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         currLocation = position;
    //         axios.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+currLocation.coords.latitude+','+currLocation.coords.longitude+'&sensor=true')
    //         .then(res => {
    //             console.log(res.data);
    //             this.setState({
    //               location : res.data 
    //             }) 
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //     });
    // }

    getQueryVariable(variable) {
        let params = (new URL(document.location)).searchParams;
        return params.get(variable);
    }

    formatDate(givenDate) {
        return (givenDate.getMonth() + 1) + "/" + givenDate.getDate() + "/" + givenDate.getFullYear();
    }

    hideEvent(event, picker) {
        this.setState({
            from : picker.startDate.format('MM/DD/YYYY'),
            to : picker.endDate.format('MM/DD/YYYY')
        });
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        window.location.replace("/search?" + $.param(this.state));
        axios.post("http://localhost:3000/vehicle/search", this.state)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() { 
        return (
            <div>
                <Form onSubmit={this.handleSubmit} inline>
                    <div className="d-inline-flex p-2">
                        <FontAwesomeIcon icon={faLocationArrow} className="searchComponentIcons"/>
                        <FormControl type="text" placeholder="Location" name="location" 
                                value={this.state.location} onChange={this.handleChange} required/>
                    </div>
                    <div className="space-on-left">
                        <Button type="submit" variant="primary" >Search</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Search;