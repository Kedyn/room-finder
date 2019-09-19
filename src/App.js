import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import NotFoundPage from "./components/pages/NotFoundPage";
import HomePage from "./components/pages/HomePage";

import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/not-found" component={NotFoundPage} />

            {/*
              Add your page-component here
              */}

            <Route path="/" exact component={HomePage} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
