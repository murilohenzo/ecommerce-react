import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Header from "../Header/";
import Footer from "../Footer";
import Product from "../Product";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/custom.css";

class Home extends Component {
    render() {
      return (
            <div>
              <Header />
                  <Product />
              <Footer />
            </div>
      );
    }
  }
  
export default withRouter(Home);