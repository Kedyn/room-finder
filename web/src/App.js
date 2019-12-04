import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/template/NavBar";
import Footer from "./components/template/Footer";

import NotFoundPage from "./components/pages/NotFoundPage";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/profile/ProfilePage";
class App extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="d-flex flex-column vh-100">
        <NavBar />

        <Switch>
          <Route path="/not-found" component={NotFoundPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Redirect to="/not-found" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
