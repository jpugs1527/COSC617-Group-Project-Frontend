import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import { LoginActions } from '../../actions'
import Header from '../common/Header'
import Footer from '../common/Footer'

class LoginPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() { 
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-header">
                                    Login
                                </div>
                                <div class="card-body">
                                    <div class="col-md-8">
                                        <form onSubmit={this.handleSubmit}>
                                            <div class="form-group">
                                                <label for="username">Username</label>
                                                <input type="text" class="form-control" name="username" placeholder="Enter username" 
                                                        value={this.state.username} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label for="password">Password</label>
                                                <input type="password" class="form-control" name="password" placeholder="Enter Password"
                                                         value={this.state.password} onChange={this.handleChange}/>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Login</button>
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

export default connect(null)(LoginPage)