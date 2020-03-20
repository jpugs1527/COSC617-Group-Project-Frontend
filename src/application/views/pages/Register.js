import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import { RegisterActions } from '../../actions'
import Header from '../common/Header'
import Footer from '../common/Footer'

class RegisterPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            email : '',
            password : '',
            confirm_password : ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        document.getElementById("data").innerHTML = JSON.stringify(this.state);
    }

    render() { 
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Registration</title>
                </Helmet>
                
                <div class="container">
                    <p id="data"></p>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    Register
                                </div>
                                <div class="card-body">
                                    <div class="col-md-8">
                                        <form onSubmit={this.handleSubmit}>
                                            <div class="form-group">
                                                <label for="username">Username</label>
                                                <input type="text" class="form-control" name="username" placeholder="Enter username" 
                                                        value={this.state.username} onChange={this.handleChange} required/>
                                            </div>
                                            <div class="form-group">
                                                <label for="email">Email address</label>
                                                <input type="email" class="form-control" name="email" placeholder="Enter email"
                                                        value={this.state.email} onChange={this.handleChange} required/>
                                            </div>
                                            <div class="form-group">
                                                <label for="password">Password</label>
                                                <input type="password" class="form-control" name="password" placeholder="Enter Password"
                                                        value={this.state.password} onChange={this.handleChange} required/>
                                            </div>
                                            <div class="form-group">
                                                <label for="confirm_password">Confirm Password</label>
                                                <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password"
                                                        value={this.state.confirm_password} onChange={this.handleChange} required/>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Register</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(RegisterPage)