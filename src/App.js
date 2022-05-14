import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Produto } from './Components/Produto';
import listaDeProdutos from "./data/produtos.json";


export class App extends React.Component {

  state = {
    valorMinimo: "", 
    valorMaximo: "",
    buscarNome: "", 

    // products está declarado em ingles para evitar conflito com a class declarada como "produtos"
    products: listaDeProdutos,
    order: 1
  }

  onChangeMinimo = (event) => {
    this.setState ({valorMinimo: event.target.value})
  }

  onChangeMaximo = (event) => {
    this.setState ({valorMaximo: event.target.value})
  }

  onChangeNome = (event) => {
    this.setState ({buscarNome: event.target.value})
  }

  mudarOrdem = (event) => {
    this.setState({
      order: event.target.value
    })
  }


  render(){

    
    return (
      <div className="App">
        <div className='filtros'>
          <h3>Filtros</h3>

          <label>Valor mínimo:</label>
          <input type="number" value={this.state.valorMinimo} 
          onChange = {this.onChangeMinimo}
          />

          <label>Valor máximo:</label>
          <input type="number" value={this.state.valorMaximo}
          onChange = {this.onChangeMaximo}
          />

          <label>Buscar por nome:</label>
          <input type="text" value={this.state.buscarNome}
          onChange = {this.onChangeNome}
          />
        </div>
        
        <div className='meio'>
          <h1>Space <em>Tuor</em> &#x1F680; </h1>
          <div className='cabecalho'>
            <h3>Quantidade de produtos:</h3>
              <div className='ordem'>
                <p>Ordenação:</p>
                <select 
                  name='order' 
                  value={this.state.order}
                  onChange={this.mudarOrdem}>

                  <option value={1}>Crescente</option>
                  <option value={-1}>Decrescente</option>
                </select>

              </div>
          </div>
          <div className='produtos'>
            {this.state.products
            .filter(product => {
              return product.titulo.toLowerCase().includes(this.state.buscarNome.toLowerCase())
            })
            .filter(product => {
              return this.state.valorMinimo === "" || product.preco >= this.state.valorMinimo
            })
            .filter(product => {
              return this.state.valorMaximo === "" || product.preco <= this.state.valorMaximo
            })
            .sort((a,b) => {
              switch (this.state.order){
                case "decrescente":
                  return this.state.order * a.preco.localeCompare(b.preco)
                default:
                  return this.state.order * (a.preco - b.preco)
              }
            })
            .map(product => {
              return <Produto key={product.id} product={product} />
            })}

          </div>
        </div>


        <div className='carrinho'>
          <h3>Carrinho:</h3>
          <p>Valor total: R$0,00</p>
        </div>
      </div>
      
    );
  }
}

export default App;
