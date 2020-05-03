import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import axios from 'axios'
import RentCard from '../../common/RentCard'

class RentalHistoryPage extends Component {

    constructor(){
        super();

        this.user_info = JSON.parse(localStorage.getItem('user_info'))

        this.state = {
            rentHistory: []
        }
    }

    componentDidMount(){
        axios.get(process.env.REACT_APP_API_URL + "/rent/view_by_user/" + this.user_info._id)
        .then(res => {
            this.setState({
                rentHistory: res.data
            });
        });
    }
    
    render() {
        let cards = [];
        this.state.rentHistory.map((data, idx) => {   
            return cards.push(
                <RentCard data={data} key={idx}/>
            );
        });

        return (
            <div>
                <Header />
                <Helmet>
                    <title>Rent History</title>
                </Helmet>
                <Container><br/>
                    <Card>
                        <Card.Header>Rental History</Card.Header>
                        <Card.Body>
                            {cards}
                        </Card.Body>
                    </Card>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(RentalHistoryPage)