import React, {Component} from 'react';
import './PokerCard.css';

class PokerCard extends Component {
  render() {
    const {name, id, img, abilities} = this.props;
    console.log(abilities);
    return (
      <div className="PokerCard">
      <div className="ImgId">
      <div className="PokemonImg"><img src={img} alt='PokemonImage'/></div>
      <div className="PokemonId">ID / {id}</div>
      </div>
      <div className="NameAbility">
      <div className="PokemonName">{name}</div>
      <ul className="pokemon__abilities">
        {
          abilities.map(function(ability, index) {
            return (<li className="pokemon__ability" key={index}>{ability.type.name}</li>)
          })
        }
      </ul>
    </div>
    </div>);
  }
}

export default PokerCard;
