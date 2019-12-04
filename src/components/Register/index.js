import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./register.css";

import { history } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from '../../services/api'

const initialState = {
  user: {username: "", email: "", password: "" },
  list: []
};

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

class Register extends Component {
  state = { ...initialState };
  componentDidMount() {
    api('users').then(resp => {
      this.setState({ list: resp.data });
    });
  }

  notify = text => toast(text);

  async save(e) {
    e.preventDefault();

    const user = this.state.user;

    // const { email, password } = this.state;

    if (!user.username) {
      this.notify("Nome é obrigatório !!!");
    } else if (!user.email) {
      this.notify("Email é obrigatório !!!");
    } else if (emailIsValid(user.email) !== true) {
      this.notify("Email inválido")
    } else if (!user.password) {
      this.notify("Senha é obrigatória !!!");
    } else {

      api.post('users', user)
        .then(resp => {
          // const list = this.getUpdatedList(resp.data);

          this.notify("Cadastrado com sucesso");
        })
        .finally(() => {
          history.push("/login");
        });
    }
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <h1 className="register-h1">Sign up</h1>
        <form className="register">
          <label>Nome:</label>
          <br />
          <input
            type="text"
            name="username"
            value={this.state.user.name}
            autoFocus
            autoComplete="off"
            onChange={e => this.updateField(e)}
            placeholder="username"
          />
          <br />

          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.user.email}
            autoComplete="off"
            onChange={e => this.updateField(e)}
            placeholder="teste@teste.com"
          />
          <br />

          <label>Senha:</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.user.password}
            autoComplete="off"
            onChange={e => this.updateField(e)}
            placeholder="password"
          />
          <br />

          <button type="submit" onClick={e => this.save(e)}>
            Cadastrar
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
