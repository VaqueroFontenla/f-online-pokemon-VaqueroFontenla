export function getPokemon() {
  const pokemons = [];
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=25/';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('data', JSON.stringify(data));
      data.results.length = 25;
      for (const pokemon of data.results) {
        fetch(pokemon.url).then(res => res.json()).then(datapokemon => {
          localStorage.setItem('datapokemon', JSON.stringify(datapokemon));
          pokemons.push(datapokemon);
        });
      }
    })
    .then(pokemons => {
      return pokemons
    })
}