import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import { WelcomeActions } from '../../actions'
import Header from '../common/Header'
import Footer from '../common/Footer'

class WelcomePage extends Component {

    test = () => {
        this.props.dispatch(WelcomeActions.test({name: 'MERN.JS'}))
    }

    render() { 
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Welcome</title>
                </Helmet>
                 <div className="flex-center position-ref full-height">
            
                    <div className="content">
                        <div onClick={this.test} className="title m-b-md">
                            Home
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(WelcomePage)