import React, {
  Component
} from 'react';
import './PokerCard.css';

class PokerCard extends Component {
  render() {
    const {name,id,img,abilities}= this.props;
    return (
      <div className="PokerCard">
      <div className="PokemonName">{name}</div>
      <div className="PokemonId">{id}</div>
      <div className="PokemonImg"><img src={img} alt='PokemonImage'/></div>
        <ul className="pokemon__abilities">
            {
              abilities.map(function(ability,index) {
                return (
                  <li className="pokemon__ability" key={index}>{ability.name}</li>)
                })
              }
            </ul>

      </div>
    );
  }
}

export default PokerCard;
