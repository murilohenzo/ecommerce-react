import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./forgotPassword.css";
import { history } from "../../App";
import bcrypt from "bcryptjs"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from '../../services/api'

class ForgotPassword extends Component {
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
      api.get('users').then(resp => {
        const data = resp.data;
        const userExists = data.find(
          user => user.email === email && bcrypt.compare(user.password, password)
        );

        if (userExists) {
          history.push("/login");
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
        <h1 className="register-h1">Recuperação de Conta</h1>
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
          <div>
            <center><Link to="/login">Faça login</Link></center>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ForgotPassword);