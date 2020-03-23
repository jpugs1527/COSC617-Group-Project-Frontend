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

        let _years = [];
        vehiclesData.results.map((data) => {
            if (!_years.includes( data.Year)) {
                _years.push( data.Year );
            }
        });

        this.years = this.createOptions(_years, "year");
        this.manufacturers = [];
        this.models = [];
    }

    createOptions(array, id) {
        //remove current options
        //$('#'+id+' option:gt(0)').remove();

        let retArr = [];
        $.each(array.sort(), function(idx, data){
            retArr.push(
                <option value={data} key={idx}>{data}</option>
            );
        });

        return retArr;
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value });

        let _models = [];
        let _manufacturers = [];

        if (field == "year") {
            this.manufacturers = [];
            this.models = [];

            vehiclesData.results.map((data) => {
                if (event.target.value == data.Year) {
                    if (!_manufacturers.includes( data.Make )) {
                        _manufacturers.push( data.Make );
                    }
                }
            });

            this.manufacturers = this.createOptions(_manufacturers, "manufacturer");
            this.models = this.createOptions(_models, "model");
        } 
        
        if (field == "manufacturer") {
            this.models = [];

            vehiclesData.results.map((data) => {
                if (this.state.year == data.Year && event.target.value == data.Make) {
                    if (!_models.includes( data.Model )) {
                        _models.push( data.Model );
                    }
                }
            });
            this.models = this.createOptions(_models, "model");
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