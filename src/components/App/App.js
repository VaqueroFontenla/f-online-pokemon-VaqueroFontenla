import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import PokerList from '../PokerList/PokerList.js';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    pokemonsArray: [],
    pokemonName:'',
    pokemonsArrayFiltered:[]
  }

}


  componentDidMount() {
    const pokemons = [];
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=25/';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('data', JSON.stringify(data));

      for (const pokemon of data.results) {
        fetch(pokemon.url)
        .then(res => res.json())
        .then(datapokemon => {
          localStorage.setItem('datapokemon', JSON.stringify(datapokemon));
          pokemons.push(datapokemon);
          this.setState({
          pokemonsArray: pokemons
        })

          //console.log(this.state.pokemonsArray);

        });
          }
  })
}

filterPokemonByName(e){
  this.setState({
    pokemonName: e.target.value
  }, ()=>{
    const pokemonsArray=[...pokemonsArray];
    const pokemonsFiltered=pokemonsArray.filter(item => { return item.name.toLowerCase().includes(this.state.name.toLowerCase())});
    this.setState({
      pokemonsArrayFiltered: pokemonsFiltered
    });
  })

}

  render() {
    return (
      <div className="App">
        <SearchBar filterPokemonByName={this.filterPokemonByName}/>
        <PokerList  pokemons={this.state.pokemonsArray}/>

      </div>
    )
  }
}

export default App;
