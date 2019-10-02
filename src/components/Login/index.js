import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { history } from "../../App";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = "http://localhost:3001/users";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  notify = text => toast(text);

  entrar = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email) {
      this.notify("Email é obrigatório !!!");
    } else if (!password) {
      this.notify("Senha é obrigatória !!!");
    } else {
      axios.get(baseUrl).then(resp => {
        const data = resp.data;
        const userExists = data.find(
          user => user.email === email && user.password === password
        );

        if (userExists) {
          history.push("/home");
        } else {
          this.notify("Usuário não existe !!!");
        }
      })
    }
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <form onSubmit={this.entrar} className="login">
          <label>Email:</label>
          <br />
          <input
            type="email"
            autoComplete="off"
            autoFocus
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="teste@teste.com"
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            autoComplete="off"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="password"
          />
          <br />

          <button type="submit">Entrar</button>

          <Link to="/register">Ainda não possui uma conta?</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);