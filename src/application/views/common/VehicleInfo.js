import React, { Component } from 'react'
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import $ from "jquery"
import FileUploadInput from './FileUploadInput'

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
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});
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
                            <FormControl type="text" placeholder="Year" name="year"
                                    value={this.state.year} onChange={this.handleChange} required/>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col sm={4}>
                            <FormControl type="text" placeholder="manufacturer" name="manufacturer"
                                    value={this.state.manufacturer} onChange={this.handleChange} required/>
                        </Col>
                    </Row><br/>
                    <Row>
                        <Col sm={4}>
                            <FormControl type="text" placeholder="Model" name="model"
                                    value={this.state.model} onChange={this.handleChange} required/>
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