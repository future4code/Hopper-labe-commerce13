import React from "react";
import './Produto.css';
// import listaDeProdutos from "./data/produtos.json";

export function Produto(props) {
        return    <div className="card">
                <img className="imagensPlanetas" src={ props.product.imagem } />
                <div className="textos">
                    <h2 className="tituloPlanetas" title={props.product.titulo}>
                        <u>{props.product.titulo}</u>
                    </h2>
                    <span class="precoProdutos"> R$ {props.product.preco} Milhões</span>
                    <button className="button">Adicionar pacote de viagem</button>
                </div>
            </div>
    }
