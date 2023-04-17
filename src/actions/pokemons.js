export const FETCH__POKEMONS = 'FETCH__POKEMONS';
export const fetchPokemons = () => ({
type:FETCH__POKEMONS,
});

export const SAVE__POKEMONS = 'SAVE__POKEMONS';
export const savePokemons = (pokemons) => ({
  type: SAVE__POKEMONS,
  pokemons,
});