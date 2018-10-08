import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import PokerList from '../PokerList/PokerList.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsArray: [],
      pokemonName: '',
      pokemonsArrayFiltered: []
    }
    this.filterPokemonByName = this.filterPokemonByName.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    const pokemons = [];
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=25/';
    fetch(url).then(res => res.json()).then(data => {
      localStorage.setItem('data', JSON.stringify(data));
      data.results.length = 25;
      for (const pokemon of data.results) {
        fetch(pokemon.url).then(res => res.json()).then(datapokemon => {
          localStorage.setItem('datapokemon', JSON.stringify(datapokemon));
          pokemons.push(datapokemon);
          this.setState({pokemonsArray: pokemons})
        });
      }
    })

  }

  filterPokemonByName(e) {
    this.setState({
      pokemonName: e.target.value
    }, () => {
      const pokemonsArray = [...this.state.pokemonsArray];
      const pokemonsFiltered = pokemonsArray.filter(item => {
        return item.name.toLowerCase().includes(this.state.pokemonName.toLowerCase())
      });
      this.setState({pokemonsArrayFiltered: pokemonsFiltered})
    });
  }

  render() {
    return (
      <div className="App">
        <div className="SquareLeft"></div>
        <div className="SquareRight"></div>
        <SearchBar filterPokemonByName={this.filterPokemonByName}/>
        <PokerList  pokemons={this.state.pokemonsArray}
                    pokemonsFiltered={this.state.pokemonsArrayFiltered}/>
        <div className="CircleLeft"></div>
        <div className="CircleRight"></div>
      </div>




  )
  }
}

export default App;
