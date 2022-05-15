import React from "react";
import './Produto.css';
// import listaDeProdutos from "./data/produtos.json";

export function Produto(props) {
        return    <div className="card">
                <img src="https://picsum.photos/200/200" alt=""/>
                <div className="textos">
                    <h2 title={props.product.titulo}>
                        <u>{props.product.titulo}</u>
                    </h2>
                    <span> R$ {props.product.preco.toLocaleString('pt-BR')} milhões</span>
                    <button>Adicionar pacote de viagem</button>
                </div>
            </div>
    }
