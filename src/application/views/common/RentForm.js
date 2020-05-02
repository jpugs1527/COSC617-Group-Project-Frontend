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

        this.invalidDates = [];
   
        //only select one day
        this.state = {
            start: this.getClosestAvailableDate(),
            end: this.getClosestAvailableDate(),
            cost: "",
            totalCost: "",
            rentLength: "",
            rentHistory: ""
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
                cost : response[0].cost,
                rentHistory: response[0].rentHistory
            });

            this.invalidDates = response[0].rentHistory
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

        if (!this.state.totalCost || !this.state.rentLength) {
            alert('There is no free lunch');
        } else {
            let newRent = {
                start: this.state.start,
                end: this.state.end,
                costPerDay: this.state.cost,
                totalCost: this.state.totalCost,
                rentLength: this.state.rentLength
            }

            let rentHistory;

            if (_.isArray(this.state.rentHistory)) {
                rentHistory = this.state.rentHistory;
                rentHistory.push(newRent);
            } else {
                rentHistory = [newRent];
            }

            // pull in existing rent history and add to it
            let data = {
                rentHistory : rentHistory,
                token: localStorage.getItem('Turdo_Token')
            }

            fetch(process.env.REACT_APP_API_URL + "/vehicle/edit/" + this.getQueryVariable("vehicle_id"), {
                method: 'put',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                //window.location.reload();
            });
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
            return bool || (date >= moment(range.start) && date <= moment(range.end));
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
            let date = moment(d);

            allInvalidDates.push(new Date(date.start.format(this.format)));
            allInvalidDates.push(new Date(date.end.format(this.format)));
            _.each(this.enumerateDaysBetweenDates(date.start, d.end), (betweenDay) => {
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
                start: startDate,
                end: endDate,
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
                        startDate={this.state.start} 
                        endDate={this.state.end}
                        minDate={moment(new Date(), this.format)}
                        isInvalidDate={this.invalidDate}
                        onApply={this.validate}
                        >
                        <Button type="button" variant="light" id="searchButton">{this.state.start} - {this.state.end}</Button>
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