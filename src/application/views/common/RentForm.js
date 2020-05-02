import React, {Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import moment from 'moment'
import _ from 'underscore'
import $ from 'jquery'

class RentForm extends Component {
    constructor (props) {
        super(props);        
        this.format = "M/D/YYYY";

        this.invalidDates = [
            { 'start': moment('5/2/2020'), 'end': moment('5/4/2020') },
            { 'start': moment('5/15/2020'), 'end': moment('5/17/2020') },
            { 'start': moment('5/24/2020'), 'end': moment('5/27/2020') },
        ];
   
        //only select one day
        this.state = {
            fromDate: this.getClosestAvailableDate(),
            toDate: this.getClosestAvailableDate(),
            cost: "",
            totalCost: "",
            rentLength: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.invalidDate = this.invalidDate.bind(this);
        this.getClosestAvailableDate = this.getClosestAvailableDate.bind(this);
        this.enumerateDaysBetweenDates = this.enumerateDaysBetweenDates.bind(this);
        this.getAllInvalidDates = this.getAllInvalidDates.bind(this);
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
            this.setState({
                cost : response[0].cost
            });
        });
    }

    getQueryVariable(variable) {
        let params = (new URL(document.location)).searchParams;
        return params.get(variable);
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.totalCost) {
            alert('There is no free lunch');
        }
    }

    getClosestAvailableDate(){
        let startDay = new Date();
        startDay = moment(startDay);

        while (this.invalidDate(startDay)) {
            startDay.add(1, 'days');
        }
        startDay.add(1, 'days');
        startDay = new Date(startDay);

        return moment(startDay).format(this.format);
    }

    invalidDate(date) {
        return this.invalidDates.reduce(function(bool, range) {
            return bool || (date >= range.start && date <= range.end);
        }, false);
    }

    enumerateDaysBetweenDates(startDate, endDate) {
        var dates = [];
    
        var currDate = moment(startDate).startOf('day');
        var lastDate = moment(endDate).startOf('day');
    
        while(currDate.add(1, 'days').diff(lastDate) < 0) {
            dates.push(currDate.clone().toDate());
        }
    
        return dates;
    }

    getAllInvalidDates() {
        let allInvalidDates = [];
        
        _.each(this.invalidDates, (d) => {
            allInvalidDates.push(new Date(d.start.format(this.format)));
            allInvalidDates.push(new Date(d.end.format(this.format)));
            _.each(this.enumerateDaysBetweenDates(d.start, d.end), (betweenDay) => {
                allInvalidDates.push(new Date(moment(betweenDay).format(this.format)));
            });
        });

        return allInvalidDates.sort();
    }

    validate(e, picker){
        let disabledArr = this.getAllInvalidDates();

        // Get the selected bound dates.
        let startDate = picker.startDate.format(this.format);
        let endDate = picker.endDate.format(this.format);

        // Compare the dates again.
        var clearInput = false;
        for(let i=0;i<disabledArr.length;i++){
            if(new Date(startDate) < disabledArr[i] && new Date(endDate) > disabledArr[i]){
                clearInput = true;
            }
        }

        // If a disabled date is in between the bounds, clear the range.
        if(clearInput){
            if(!alert("Invalid selection. Please select consecutive days.")){
                $("#rentModalClose").trigger('click');
            }
        } else {    
            let start = moment(startDate, this.format);
            let end = moment(endDate, this.format);
    
            //Difference in number of days
            let rentLengthInDays = moment.duration(end.diff(start)).asDays() + 1;
            let totalCost = rentLengthInDays * this.state.cost;
    
            this.setState({
                fromDate: startDate,
                toDate: endDate,
                totalCost: totalCost,
                rentLength: rentLengthInDays
            });
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                Choose date range to rent the vehicle
                <div className="d-inline-flex p-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="searchComponentIcons"/>
                    <DateRangePicker
                        startDate={this.state.fromDate} 
                        endDate={this.state.toDate}
                        minDate={moment(new Date(), this.format)}
                        isInvalidDate={this.invalidDate}
                        onApply={this.validate}
                        >
                        <Button type="button" variant="light" id="searchButton">{this.state.fromDate} - {this.state.toDate}</Button>
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