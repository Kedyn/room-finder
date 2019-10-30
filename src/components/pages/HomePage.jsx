import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

export default class HomePage extends Component {
  toRegister = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <main role="main" className="flex-grow-1 d-flex align-items-center">
        <Container className="text-center">
          <h1 className="mb-5">
            Find your next roommate.
            <br />
            Search for your new room.
            <br />
            Let people find their new living space.
          </h1>
          <Button className="px-5" onClick={this.toRegister}>
            Get Started
          </Button>
        </Container>
      </main>
    );
  }
}
