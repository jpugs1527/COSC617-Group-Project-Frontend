import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Search from './Search'

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn : '',
            user_info: ''
        };

        this.handleChange = this.logout.bind(this);
    }

    componentDidMount(){
        fetch(process.env.REACT_APP_API_URL + "/user/authenticate?token=" + localStorage.getItem('Turdo_Token'), {
            method: "GET",
            headers : { 
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.isLoggedIn) {
                this.setState( { 
                    isLoggedIn : true,
                    user_info : JSON.parse(localStorage.getItem('user_info'))
                });
            }
        });
    }

    logout() {
        // remove token and refresh
        localStorage.setItem("Turdo_Token", "");
        window.location.reload();
    }

    render() {
        let searchArea = <Search/>;
        let doNotShow = ["/", "/search"];
    
        doNotShow.forEach(function(text){
            if (window.location.pathname === text) {
                searchArea = "";
            }
        });

        return (
            <div>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Navbar.Brand href="/">Turdo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">        
                        <Nav className="mr-auto">
                            { this.state.isLoggedIn ? (
                            <NavDropdown title={this.state.user_info.username} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/user/vehicle/add">Add a Vehicle</NavDropdown.Item>
                                <NavDropdown.Item href="/user/vehicle/view">View Vehicles</NavDropdown.Item>
                                <NavDropdown.Item href ="/user/">View Profile</NavDropdown.Item>
                                <NavDropdown.Item>Rental History</NavDropdown.Item>
                            </NavDropdown>
                            ) : null}
                        </Nav>
                        {searchArea}
                        { !this.state.isLoggedIn ? (
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </>
                        ) : <Nav.Link href='#' onClick={this.logout} >Logout</Nav.Link> }
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;