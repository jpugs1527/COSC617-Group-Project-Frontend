import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import { WelcomeActions } from '../../actions'


class WelcomePage extends Component {

    test = () => {
        this.props.dispatch(WelcomeActions.test({name: 'MERN.JS'}))
    }

    render() { 
        return (
            <div>
                <Helmet>
                    <title>MernJs</title>
                </Helmet>
                 <div className="flex-center position-ref full-height">
            
                    <div className="content">
                        <div onClick={this.test} className="title m-b-md">
                            MernJs
                        </div>

                        <div className="links">
                            <a href="http://mernjs.org/docs">Docs</a>
                            <a href="http://blog.mernjs.org">Blog</a>
                            <a href="https://www.youtube.com/channel/UCAcmuHoa3sEN_KuwFYk6xMw">Videos</a>
                            <a href="https://github.com/MernJs/mernjs">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null)(WelcomePage)