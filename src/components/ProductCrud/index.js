import React, { Component } from "react";
import Main from "../template/Main";
import { TiShoppingCart, TiPencil, TiTrash } from "react-icons/ti";

import InputBanner from "../upload"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from '../../services/api'

const headerProps = {
  icon: <TiShoppingCart/>,
  title: "Produtos",
  subtitle: "Cadastro de produtos: Incluir, Listar, Alterar e Excluir!"
};

const initialState = {
  product: { name: "", description: "", value: "", amount: "" },
  list: []
};

function isNumber(number) {
  return /^[0-9\b]+$/.test(number);
}

export default class ProductCrud extends Component {
  state = { ...initialState };

  componentDidMount() {
    api("products").then(resp => {
      this.setState({ list: resp.data });
    });
  }

  notify = text => toast(text);

  clear() {
    this.setState({ product: initialState.product });
  }

  save(e) {
    e.preventDefault();

    const product = this.state.product;
    if (!product.name) {
      this.notify("Nome é obrigatório");
    } else if (!product.description) {
      this.notify("Descrição é obrigatório");
    } else if (isNumber(product.amount) !== true) {
      this.notify("Quantidade inválida");
    } else if (isNumber(product.value) !== true) {
      this.notify("Valor inválida");
    } else {
      const method = product.id ? "put" : "post";
      api.post('products', product).then(resp => {
        const list = this.getUpdatedList(resp.data);
        this.setState({ product: initialState.product, list });
      });

      api.put(`products/${product.id}`, product).then(resp => {
        const list = this.getUpdatedList(resp.data);
        this.setState({ product: initialState.product, list });
      });
    }
  }

  getUpdatedList(product, add = true) {
    const list = this.state.list.filter(u => u.id !== product.id);
    if (add) list.unshift(product);
    return list;
  }

  updateField(event) {
    const product = { ...this.state.product };
    product[event.target.name] = event.target.value;
    this.setState({ product });
  }

  renderForm() {
    return (
      <>
        <InputBanner name="banner_id" />
        <div className="form">
          <ToastContainer />

          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.product.name}
                  onChange={e => this.updateField(e)}
                  maxLength="30"
                  placeholder="Digite o nome..."
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Descrição</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={this.state.product.description}
                  onChange={e => this.updateField(e)}
                  maxLength="100"
                  placeholder="Digite a descrição..."
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Quantidade</label>
                <input
                  type="text"
                  className="form-control"
                  name="amount"
                  value={this.state.product.amount}
                  onChange={e => this.updateField(e)}
                  placeholder="Digite a quantidade..."
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Valor</label>
                <input
                  type="text"
                  className="form-control"
                  name="value"
                  value={this.state.product.value}
                  onChange={e => this.updateField(e)}
                  placeholder="Digite o valor..."
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={e => this.save(e)}>
                Salvar
              </button>

              <button
                className="btn btn-secondary ml-2"
                onClick={e => this.clear(e)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  load(product) {
    this.setState({ product });
  }

  remove(product) {
    api.delete(`products/${product.id}`).then(resp => {
      const list = this.getUpdatedList(product, false);
      this.setState({ list });
    });
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map(product => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.amount}</td>
          <td>{product.value}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => this.load(product)}
            >
              <TiPencil/>
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => this.remove(product)}
            >
              <TiTrash/>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}