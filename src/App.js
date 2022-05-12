import React from 'react';
//import logo from './logo.svg';
import './App.css';


export class App extends React.Component {

  state = {
    valorMinimo: " ", 
    valorMaximo: " ",
    buscarNome: " ", 
  }

  onChangeMinimo = (event) => {
    this.setState ({valorMinimo: event.target.value})
  }

  onChangeMaximo = (event) => {
    this.setState ({valorMaximo: event.target.value})
  }

  onChangeNome = (event) => {
    this.setState ({valorNome: event.target.value})
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
          <div className='cabecalho'>
            <h3>Quantidade de produtos:</h3>
              <div className='ordem'>
                <p>Ordenação:</p>
                <select>
                  <option>Crescente</option>
                  <option>Decrescente</option>
                </select>

              </div>
          </div>
          <div>
            <h1> Produtos</h1>
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
