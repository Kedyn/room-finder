import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Login from "components/modals/Login";
import Register from "components/modals/Register";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: false,
      showRegister: false
    };
  }

  showLogin = () => {
    this.setState({ showLogin: true });
  };

  hideLogin = () => {
    this.setState({ showLogin: false });
  };

  showRegister = () => {
    this.setState({ showRegister: true });
  };

  hideRegister = () => {
    this.setState({ showRegister: false });
  };

  render() {
    const { showLogin, showRegister } = this.state;

    return (
      <React.Fragment>
        <Navbar
          expand="md"
          className="text-uppercase"
          bg="primary"
          variant="dark"
        >
          <Navbar.Brand as={NavLink} exact to="/">Room Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={this.showLogin}>Login</Nav.Link>
              <Nav.Link onClick={this.showRegister}>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Login show={showLogin} onClose={this.hideLogin} />
        <Register show={showRegister} onClose={this.hideRegister} />
      </React.Fragment>
    );
  }
}
