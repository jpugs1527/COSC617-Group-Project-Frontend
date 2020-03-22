import React, { Component } from 'react'
import { Form, FormControl, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-daterangepicker/daterangepicker.css'

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

    getQueryVariable(variable) {
        let params = (new URL(document.location)).searchParams;
        return params.get(variable);
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
                <Form onSubmit={this.handleSubmit} inline>
                    <div className="d-inline-flex p-2">
                        <FontAwesomeIcon icon={faLocationArrow} className="searchComponentIcons"/>
                        <FormControl type="text" placeholder="Location" name="location" 
                                value={this.state.location} onChange={this.handleChange} required/>
                    </div>
                    <div className="d-inline-flex p-2">
                        <FontAwesomeIcon icon={faCalendarAlt} className="searchComponentIcons"/>
                        <DateRangePicker 
                            startDate={this.state.from} 
                            endDate={this.state.to}
                            minDate={this.today}
                            onHide={this.hideEvent}>
                            <Button type="button" variant="light">{this.state.from} - {this.state.to}</Button>
                        </DateRangePicker>
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