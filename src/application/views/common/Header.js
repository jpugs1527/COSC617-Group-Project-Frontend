import React from "react";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Search from './Search'

function Header() {

    let searchArea = <Search/>;
    let doNotShow = ["/", "/search"];

    doNotShow.forEach(function(text){
        if (window.location.pathname == text) {
            searchArea = "";
        }
    });
    
    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="/">JLT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item>Action</NavDropdown.Item>
                        <NavDropdown.Item>Another action</NavDropdown.Item>
                        <NavDropdown.Item>Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {searchArea}
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default Header;