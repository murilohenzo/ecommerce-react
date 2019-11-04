import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./global.css";
import "./app.css";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default App;
