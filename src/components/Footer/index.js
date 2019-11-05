import React, { Component } from "react";

// import { Container } from './styles';
import "../Footer/footer.css"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Serpent Caffeine</h5>
              <p>E-commerce de cafés</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Area Administrativa</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
