import React, { Component } from "react";
import { Modal, Form, Row, Col, Button, Spinner } from "react-bootstrap";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      checking: false,
      error: "",
      img: null,
      fullName: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    /* if (getCurrentUser()) {
      this.props.history.push("/account");
    } */
  }

  handleSubmit = async event => {
    event.preventDefault();

    const form = event.target;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
  };

  render() {
    const {
      validated,
      checking,
      error,
      fullName,
      email,
      password
    } = this.state;
    const { show, onClose } = this.props;

    return (
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
            <Row className="mb-4">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  required
                  autoFocus={true}
                />
                <Form.Control.Feedback type="invalid">
                  {fullName}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  name="email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {email}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {password}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Control
                  type="date"
                  placeholder="Birthdate"
                  name="birthdate"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please let us know your birthdate
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="gender">
                  <Form.Control as="select" required>
                    <option disabled selected value>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please choose a gender.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            {checking && (
              <Row className="mb-4 text-center">
                <Col>
                  <Spinner animation="grow" />
                </Col>
              </Row>
            )}
            {error && (
              <Row className="mb-4 text-center">
                <Col>
                  <span className="text-danger">{error}</span>
                </Col>
              </Row>
            )}
            {!checking && (
              <Row>
                <Col className="text-center">
                  <Button variant="primary" type="submit" block>
                    Sign Up
                  </Button>
                </Col>
              </Row>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
