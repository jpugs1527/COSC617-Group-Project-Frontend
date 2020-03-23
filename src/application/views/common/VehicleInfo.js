import React, { Component } from 'react'
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import $ from "jquery"
import FileUploadInput from './FileUploadInput'
import vehiclesData from '../assets/json/detailed_cars_list'
import Parse from 'parse'

class VehicleInfo extends Component {

    constructor(props) {
        super(props);

        let year = "";
        let manufacturer = "";
        let model = "";

        if (typeof this.props.info !== 'undefined') {
            year = this.props.info.year;
            manufacturer = this.props.info.manufacturer;
            model = this.props.info.model;
        }

        this.state = {
            year : year,
            model : model,
            manufacturer : manufacturer,
            files : [],
            error : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //pulling defaults for manufacturers dropdown
        this.manufacturers = [];

        vehiclesData.results.map((data, idx) => {
            if (!this.manufacturers.includes( data.Make)) {
                return this.manufacturers.push( data.Make );
            }
        });
        this.manufacturers.sort();

        let manufacturers = [];
        $.each(this.manufacturers, function(idx, data){
            manufacturers.push(
            <option value={data}>{data}</option>
            );
        });
        this.manufacturers = manufacturers;

        console.log(vehiclesData);
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});

        if (field == "manufacturer") {
            this.years = [];

            vehiclesData.results.map((data, idx) => {
                if (event.target.value == data.Make) {
                    if (!this.years.includes( data.Year)) {
                        return this.years.push( data.Year );
                    }
                }
            });
            this.years.sort();
            
            let years = [];
            $.each(this.years, function(idx, data){
                years.push(
                    <option value={data}>{data}</option>
                );
            });
            this.years = years;
        } 
        
        if (field == "year") {
            this.models = [];

            vehiclesData.results.map((data, idx) => {
                if (event.target.value == data.Year && this.state.manufacturer == data.Make) {
                    if (!this.models.includes( data.Model )) {
                        return this.models.push( data.Model );
                    }
                }
            });
            this.models.sort();

            let models = [];
            $.each(this.models, function(idx, data){
                models.push(
                    <option value={data}>{data}</option>
                );
            });
            this.models = models;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        $("#data").html(JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <p id="data"></p>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm={4}>
                            <Form.Control as="select" name="manufacturer" value={this.state.manufacturer} onChange={this.handleChange} required>
                                <option value="">Select a Manufacturer</option>
                                {this.manufacturers}
                            </Form.Control>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col sm={2}>
                            <Form.Control as="select" name="year" value={this.state.year} onChange={this.handleChange} required>
                                <option value="">Select Year</option>
                                {this.years}
                            </Form.Control>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col sm={4}>
                            <Form.Control as="select" name="model" value={this.state.model} onChange={this.handleChange} required>
                                <option value="">Select Model</option>
                                {this.models}
                            </Form.Control>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col sm={4}>
                            <FileUploadInput />
                        </Col>
                    </Row><br/>
                    <Button type="submit" variant="outline-primary">Save</Button>
                </Form>
            </div>
        )
    }
}

export default VehicleInfo;