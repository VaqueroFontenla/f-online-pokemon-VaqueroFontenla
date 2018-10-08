import React, {
  Component
} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    const {filterPokemonByName}=this.props;
    return (
      <div className = "SearchBar" >
        {/* <label fhtmlFor="inputPotters">Search your "Pokemon"</label> */}
        <input className="search-input" type="text" name="inputPokemons" value={this.props.name} onChange={filterPokemonByName}/>
      </div>
    );
  }
}

export default SearchBar;
