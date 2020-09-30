import React from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NAvItem, Jumbotron, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
        <React.Fragment>
            <Navbar dark expand="md">
              <div className="container">
                <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand className="mr-auto" href="/">
                    <img src="assets/images/images1.png" height="41" width="41" alt="React"/>
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar> 
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span>About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg"></span>Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                <span className="fa fa-address-card fa-lg"></span>Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </div>
          </Navbar>
          <Jumbotron>
             <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>React Tutorial</h1>
                        <p>We are learning full stack web developement with react by Muppala</p>
                    </div>
                </div>
            </div>
          </Jumbotron>
        </React.Fragment>
        )
    }
}

export default Header;