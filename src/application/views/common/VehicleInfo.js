import React, { Component } from 'react'
import { Alert, Form, Button, Row, Col } from 'react-bootstrap'
import $ from "jquery"
import ImageUploadInput from './ImageUploadInput'
import vehiclesData from '../assets/json/detailed_cars_list'

class VehicleInfo extends Component {

    constructor(props) {
        super(props);

        let _years = [];
        vehiclesData.results.map((data) => {
            if (!_years.includes( data.Year)) {
                _years.push( data.Year );
            }
        });

        this.vehicleId = "";

        this.action = "add";
        this.method = "POST";

        this.years = this.createOptions(_years);
        this.manufacturers = [];
        this.models = [];

        this.state = {
            token : localStorage.getItem('Turdo_Token'),
            userId : JSON.parse(localStorage.getItem('user_info'))._id,
            year : "",
            model : "",
            manufacturer : "",
            images : []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if ( this.props.info ) {
            fetch(process.env.REACT_APP_API_URL + "/vehicle/view_one/" + this.props.info, {
                method: "GET",
                headers : { 
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    year : response[0].year,
                    model : response[0].model,
                    manufacturer : response[0].manufacturer,
                    images : response[0].images
                });

                this.action = "edit/" + response[0]._id;
                this.method = "PUT";
            });
        }
    }

    createOptions(array) {
        let retArr = [];
        $.each(array.sort(), function(idx, data){
            retArr.push(
                <option value={data} key={idx}>{data}</option>
            );
        });

        return retArr;
    }

    getManufacturers(year) {
        let _manufacturers = [];
        vehiclesData.results.map((data) => {
            if (year == data.Year) {
                if (!_manufacturers.includes( data.Make )) {
                    _manufacturers.push( data.Make );
                }
            }
        });
        return _manufacturers;
    }

    getModels(year, make) {
        let _models = [];
        vehiclesData.results.map((data) => {
            if (year == data.Year && make == data.Make) {
                if (!_models.includes( data.Model )) {
                    _models.push( data.Model );
                }
            }
        });
        return _models;
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value });

        if (field == "year") {
            this.manufacturers = this.createOptions(this.getManufacturers(event.target.value));
            this.models = this.createOptions(this.getModels(event.target.value, this.state.manufacturer));
        } 
        
        if (field == "manufacturer") {            
            this.models = this.createOptions(this.getModels(this.state.year, event.target.value));
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(process.env.REACT_APP_API_URL + "/vehicle/" + this.action, {
            method: this.method,
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            $(".message").html(response.message).show().delay(2000).fadeOut();
            // everything is good so clear the form
            if (response.error == false && this.action == "add") {
                $("#vehicleInputForm select").val("");
                $(".dzu-previewButton").click();
            }
        });
    }

    render() {
        this.manufacturers = this.createOptions(this.getManufacturers(this.state.year));
        this.models = this.createOptions(this.getModels(this.state.year, this.state.manufacturer));

        return (
            <div>
                <Alert variant="warning" className="message"></Alert>
                <Form onSubmit={this.handleSubmit} id="vehicleInputForm">
                    <Row>
                        <Col sm={2}>
                            <Form.Control as="select" name="year" id="year" value={this.state.year} onChange={this.handleChange} required>
                                <option value="">Select Year</option>
                                {this.years}
                            </Form.Control>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col sm={4}>
                            <Form.Control as="select" name="manufacturer" id="manufacturer" value={this.state.manufacturer} onChange={this.handleChange} required>
                                <option value="">Select a Manufacturer</option>
                                {this.manufacturers}
                            </Form.Control>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col sm={4}>
                            <Form.Control as="select" name="model" id="model" value={this.state.model} onChange={this.handleChange} required>
                                <option value="">Select Model</option>
                                {this.models}
                            </Form.Control>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col sm={4}>
                            <ImageUploadInput name="images" id="images" value={this.state.images}/>
                        </Col>
                    </Row><br/>
                    <Button type="submit" variant="outline-primary" id="editVehicleSave">Save</Button>
                </Form>
            </div>
        )
    }
}

export default VehicleInfo;