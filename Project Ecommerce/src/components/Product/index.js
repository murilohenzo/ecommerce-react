import React, { Component } from "react";

export default class Product extends Component {

  state = {
    produtos: [
      { id: 1, name: 'Café Java', preco: '250,00', fabricant: 'Dummy', descricao: 'Lorem Um café amargo e pesado, porém para todas as ocasiões.', imagem: require("../../assets/images/cafe.jpg") ,show: false},
      { id: 2, name: 'Café Javascript', preco: '250,00', fabricant: 'Comunidade', descricao: 'Café popular', imagem: require("../../assets/images/cafe.jpg") ,show: false},
      { id: 3, name: 'Café C', preco: '250,00', fabricant: 'ISO', descricao: 'Um café rápido de fazer, porém qualquer erro no preparo estraga-o.', imagem: require("../../assets/images/cafe.jpg") ,show: false},
      { id: 4, name: 'Café C++', preco: '250,00', fabricant: 'ISO', descricao: 'Um café complicado de preparar.', imagem: require("../../assets/images/cafe.jpg"), show: false},
      { id: 5, name: 'Café Python', preco: '250,00', fabricant: 'URSS', descricao: 'Um café com o preparo demorado, porém delicioso.', imagem: require("../../assets/images/cafe.jpg"), show: false},
      { id: 6, name: 'Café C#', preco: '250,00', fabricant: 'Microcof', descricao: 'Um café semelhante ao Java, melhor apreciado ao olhar a paisagem pela janela.', imagem: require("../../assets/images/cafe.jpg") ,show: false},
      { id: 7, name: 'Café ASM', preco: '250,00', fabricant: 'Jet Cooffee', descricao: 'Grãos de café frescos, deixando todo o prepado, começando pela torra dos grãos, nas suas mãos.', imagem: require("../../assets/images/cafe.jpg") ,show: false},
      { id: 8, name: 'Café Kotlin', preco: '250,00', fabricant: 'Dummy', descricao: 'Uma versão melhorada do Java.', imagem: require("../../assets/images/cafe.jpg") , show: false}
    ]
  }

  handleClickProduct = (id) =>  {
    const newProductsState = this.state.produtos.map(produto => {
      if(produto.id === id) {
        produto.show = !produto.show;
      }
      return produto;
    })
    this.setState({produtos: newProductsState} );
  }

  render() {
    return (
      <div className="parent-product">
        {this.state.produtos.map(produto => (
        <div className="card child-product" style={{ width: "18rem" }}>
        <img src={produto.imagem} className="card-img-top" alt="placeholder" />
        <div className="card-body">
          <h6 className="card-title" key={produto.id} >{produto.name}</h6>
          {produto.show && 
          <p className="descricao-produto">
            <label>Preço:</label> R$ {produto.preco}
            <br />
            <label>Fabricante:</label> {produto.fabricant}
            <br />
            <label>Descrição:</label> {produto.descricao}
            <br />
            <br />
            <button className="btn btn-success" onClick={() => alert("Você comprou um café")}>
              Comprar
            </button>
          </p>
          }
          <button className="btn btn-primary"  onClick={() => this.handleClickProduct(produto.id)}>
          {produto.show ? 'Esconder' : 'Mostrar mais'}
          </button>
        </div>
      </div>
      ))}
    </div>
    );
  }
}
