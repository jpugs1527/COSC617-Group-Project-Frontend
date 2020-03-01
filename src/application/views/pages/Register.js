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
                 <div className="flex-center position-ref full-height">
            
                    <div className="content">
                        <div onClick={this.test} className="title m-b-md">
                            Registration Page
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(RegisterPage)