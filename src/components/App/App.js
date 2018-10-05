import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import PokerList from '../PokerList/PokerList.js';
import './App.css';

class App extends Component {


  componentDidMount() {
    const pokemons = [];
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('data', JSON.stringify(data));

      for (const pokemon of data.results) {
        fetch(pokemon.url)
        .then(res => res.json())
        .then(datapokemon => {
          localStorage.setItem('datapokemon', JSON.stringify(datapokemon));
          console.log(datapokemon)
        });
          }
  })
}

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
