import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

import Register from "components/modals/Register";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRegister: false
    };
  }

  showRegister = () => {
    this.setState({ showRegister: true });
  };

  hideRegister = () => {
    this.setState({ showRegister: false });
  };

  render() {
    const { showRegister } = this.state;

    return (
      <React.Fragment>
        <main role="main" className="flex-grow-1 d-flex align-items-center">
          <Container className="text-center">
            <h1 className="mb-5">
              Find your next roommate.
              <br />
              Search for your new room.
              <br />
              Let people find their new living space.
            </h1>
            <Button className="px-5" onClick={this.showRegister}>
              Get Started
            </Button>
          </Container>
        </main>

        <Register show={showRegister} onClose={this.hideRegister} />
      </React.Fragment>
    );
  }
}
