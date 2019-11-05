import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// import { Container } from './styles';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <Link to = "/home" className="navbar-brand">
          Serpent
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="container-fluid" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to = '/home' className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to = '/register' className="nav-link">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to = '/login'className="nav-link">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);