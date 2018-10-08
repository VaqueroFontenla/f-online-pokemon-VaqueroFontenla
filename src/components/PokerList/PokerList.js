import React, {
  Component
} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PokerCard from '../PokerCard/PokerCard.js';
import './PokerList.css';

const divs = [
<div key={1} style={{height: '100vh', background: 'yellow'}}>Div no 1</div>,
<div key={2} style={{height: '100vh', background: 'yellow'}}>Div no 2</div>,
<div key={3} style={{height: '100vh', background: 'yellow'}}>Div no 3</div>,
<div key={4} style={{height: '100vh', background: 'yellow'}}>Div no 4</div>,
<div key={5} style={{height: '100vh', background: 'yellow'}}>Div no 5</div>,
<div key={6} style={{height: '100vh', background: 'yellow'}}>Div no 6</div>,
<div key={7} style={{height: '100vh', background: 'yellow'}}>Div no 7</div>,
<div key={8} style={{height: '100vh', background: 'yellow'}}>Div no 8</div>,
];

class PokerList extends Component {
  constructor(props){
  super(props);
  this.state = {
    divs: divs,
  }

  this.generateDivs = this.generateDivs.bind(this);
}

generateDivs () {
    let moreDivs = [];
    let count = this.state.divs.length;
for (let i = 0; i < 30; i++) {
      moreDivs.push(
<div key={'div' + count++} style={{height: '100vh', background: 'yellow'}}>
          Div no {count}
</div>
      );
    }
    setTimeout(() => {
      this.setState({divs: this.state.divs.concat(moreDivs)});
    }, 500);
}

  render() {
    const {pokemons} = this.props;
    console.log(this.props)
    return (
      <InfiniteScroll
      loadMore={this.generateDivs}
      hasMore={true || false}
      loader={<div className="loader" key={0}>Loading ...</div>}
      >
      <ul className = "PokerList">
        {
          pokemons.map(function (pokemon,id) {
            return (
            <PokerCard key={id} name={pokemon.name}
                                  id={pokemon.id}
                                  img={pokemon.sprites.front_default}
                                />
            )
          }
          )
        }
      </ul>
</InfiniteScroll>

    );
  }
}

export default PokerList;
