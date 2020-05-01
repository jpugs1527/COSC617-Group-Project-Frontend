import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Search from './Search'
import Authenticate from '../common/Auth'

class Header extends Component {

    constructor(props) {
        super(props);

        let user_info = localStorage.getItem('user_info');

        if (user_info !== "") {
            user_info = JSON.parse(user_info)
        }
        
        this.state = {
            user_info: user_info
        };

        this.isLoggedIn = false;

        Authenticate().then((defs)=>{ 
            this.isLoggedIn = defs.isLoggedIn;
        });
    }

    logout() {
        // remove token and refresh
        localStorage.setItem("Turdo_Token", "");
        localStorage.setItem("user_info", "");
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
                            { this.isLoggedIn ? (
                            <NavDropdown title={this.state.user_info.username} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/user/vehicle/add">Add a Vehicle</NavDropdown.Item>
                                <NavDropdown.Item href="/user/vehicle/view">View Vehicles</NavDropdown.Item>
                                <NavDropdown.Item href ="/user/profile">View Profile</NavDropdown.Item>
                            </NavDropdown>
                            ) : null }
                        </Nav>
                        {searchArea}
                        { !this.isLoggedIn ? (
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