import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import { RegisterActions } from '../../actions'
import Header from '../common/Header'
import Footer from '../common/Footer'

class RegisterPage extends Component {
    
    test = () => {
        this.props.dispatch(RegisterActions.test({name: 'MERN.JS'}))
    }

    render() { 
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Registration</title>
                </Helmet>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    Register
                                </div>
                                <div class="card-body">
                                    <div class="col-md-8">
                                        <form>
                                            <div class="form-group">
                                                <label for="username">Username</label>
                                                <input type="text" class="form-control" id="username" placeholder="Enter username"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="email">Email address</label>
                                                <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="password">Password</label>
                                                <input type="password" class="form-control" id="password" placeholder="Enter Password"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="confirm_password">Confirm Password</label>
                                                <input type="password" class="form-control" id="confirm_password" placeholder="Confirm Password"/>
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