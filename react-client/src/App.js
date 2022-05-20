import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/about.component";
import GraphEx from "./components/chart-graph.component.js";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            OFDM
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/test"} className="nav-link">
                Test
              </Link>
            </li>
            <li>
              <Link to={"/graph"} className="nav-link">
                Graph
              </Link>
            </li>
          </div>
        </nav>

        <Switch>
          <Route exact path={["/", "/graph"]} component={GraphEx} />
          <Route exact path="/about" component={About} />
          <Route exact path="/test" component={GraphEx} />
        </Switch>
      </div>
    );
  }
}

export default App;
