import React, { useState, useEffect } from "react";
import api from '../../services/api'

import { TiPlus, TiShoppingCart } from "react-icons/ti";

import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

export default function Product() {


    // const [name,setName] = useState('')


/*

    async function handleSubmit(e){
      e.preventDefault();
      await api.post('222', {
        name,

      }).then((response) => {
        alert('cadastrado')
      })

    }
    <form onSubmit={handleSubmit}

    <input value={name} onChange={(e) => setName(e.target.value)}


    */

  const [produtos, setProdutos] = useState([]);

  // vai executar assim que for montada
  useEffect(() => {
    
    api.get('products')
      .then(response => {
        const products = response.data.map(product => {
          product.show = false;
          return product;
        })
        setProdutos(products)
      })
      .catch(err => {
        alert('Erro na busca')
      });
  }, [])


  function handleClickProduct(id) {
    const newProductsState = produtos.map(produto => {
      if (produto.id === id) {
        produto.show = !produto.show;
      } else {
        produto.show = false;
      }
      return produto;
    })
    setProdutos(newProductsState);
  }

  return (
    <div className="parent-product">
      {produtos.map((produto, index) => (
        <div className="card child-product" style={{ width: "18rem" }}>
          <img src={produto.file ? produto.file.url : 'http://s2.glbimg.com/NFdaTj6Q0sx54shLZxRXGp_j4oI=/695x0/s.glbimg.com/po/tt2/f/original/2015/09/09/telaazul1.jpg'} className="card-img-top" alt="placeholder" />
          <div className="card-body">
            <h6 className="card-title" key={produto.id} >{produto.name}</h6>


          </div>

          <div className="card-footer">

            <div className="d-flex justify-content-around align-items align-items-center">

              <Button id={`Popover${index}`} style={{ background: '#FFF', borderColor: '#FFF', border: 'none' }}>
                <TiPlus color="black" size={30} />
              </Button>

              <Button  style={{ background: '#FFF', borderColor: '#FFF', border: 'none'}} onClick = {() => {alert('Adicionado no carrinho')}}>
                <TiShoppingCart color="black" size={30} />
              </Button>

            </div>


            <Popover placement="bottom" isOpen={produto.show} target={`Popover${index}`} toggle={() => handleClickProduct(produto.id)}>
              <PopoverHeader>{produto.name}</PopoverHeader>
              <PopoverBody>

                <ul>
                  <li>Preço: {produto.value}</li>
                  <li>Descrição: {produto.description}</li>
                </ul>
              </PopoverBody>
            </Popover>

          </div>
        </div>
      ))}
    </div>
  );

}
