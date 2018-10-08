import React, {
  Component
} from 'react';
import './PokerCard.css';

class PokerCard extends Component {
  render() {
    const {name,id,img}= this.props;
    return (
      <ul className="PokerCard">
      <li className="PokemonName">{name}</li>
      <li className="PokemonId">{id}</li>
      <li className="PokemonImg"><img src={img} alt='PokemonImage'/></li>
      </ul>
    );
  }
}

export default PokerCard;
