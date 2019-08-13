import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

class Header extends Component {
   
    render(){
        return(
            <Navbar bg="secondary" variant="dark">
            <Nav className="mr-auto">
            <NavLink className="nav-link" exact={true} to="/">Home</NavLink>
            <NavLink className="nav-link" exact={true} to="/borrow">Available</NavLink>
            <NavLink className="nav-link" exact={true} to="/return">Borrowed</NavLink>
            </Nav>
            <div>
                <div className="profile-info">
                    <span className="profile-username">user_name</span>
                </div>
            </div>
          </Navbar>
        )
    }
}

export default Header;