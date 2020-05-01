import React, {Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import moment from 'moment'

class RentForm extends Component {
    constructor (props) {
        super(props);
        var date = new Date();
        
        this.format = "MM-DD-YYYY";
        this.today = this.formatDate(date);
        this.fromDate = this.today;
        this.toDate = this.formatDate(new Date(date.setDate(date.getDate() + 3)));

        this.start = moment(this.fromDate, this.format);
        this.end = moment(this.toDate, this.format);

        this.state = {
            from: this.fromDate,
            to: this.toDate,
            cost: "",
            totalCost: "",
            rentLength: ""
        };

        this.hideEvent = this.hideEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch(process.env.REACT_APP_API_URL + "/vehicle/view_one/" + this.getQueryVariable("vehicle_id"), {
            method: "GET",
            headers : { 
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            let rentLength = moment.duration(this.end.diff(this.start)).asDays() + 1;
            this.setState({
                cost : response[0].cost,
                totalCost: response[0].cost * rentLength,
                rentLength: rentLength
            });
        });
    }

    formatDate(givenDate) {
        return (givenDate.getMonth() + 1) + "/" + givenDate.getDate() + "/" + givenDate.getFullYear();
    }

    getQueryVariable(variable) {
        let params = (new URL(document.location)).searchParams;
        return params.get(variable);
    }

    hideEvent(event, picker) {
        let fromDate = picker.startDate.format(this.format);
        let toDate = picker.endDate.format(this.format);

        var start = moment(fromDate, this.format);
        var end = moment(toDate, this.format);

        //Difference in number of days
        let rentLengthInDays = moment.duration(end.diff(start)).asDays() + 1;
       
        let totalCost = rentLengthInDays * this.state.cost;

        this.setState({
            from: fromDate,
            to: toDate,
            totalCost: totalCost,
            rentLength: rentLengthInDays
        });
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                Choose date range to rent the vehicle
                <div className="d-inline-flex p-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="searchComponentIcons"/>
                    <DateRangePicker 
                        startDate={this.state.from} 
                        endDate={this.state.to}
                        minDate={this.today}
                        onHide={this.hideEvent}>
                        <Button type="button" variant="light" id="searchButton">{this.state.from} - {this.state.to}</Button>
                    </DateRangePicker>
                </div><br/><br/>
                <p>Total days: {this.state.rentLength}</p>
                <p>Total cost: {this.state.totalCost}</p><br/>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        );

    }
}

export default RentForm