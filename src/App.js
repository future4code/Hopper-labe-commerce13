import React from 'react';
import logo from './logo.svg';
import './App.css';


export class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className='filtros'>
          <h3>Filtros</h3>

          <label>Valor mínimo:</label>
          <input type="number"/>

          <label>Valor máximo:</label>
          <input type="number"/>

          <label>Buscar por nome:</label>
          <input type="text"/>
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
