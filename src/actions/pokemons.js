export const FETCH__POKEMONS = 'FETCH__POKEMONS';
export const fetchPokemons = () => ({
type:FETCH__POKEMONS,
});

export const SAVE__POKEMONS = 'SAVE__POKEMONS';
export const savePokemons = (pokemons) => ({
  type: SAVE__POKEMONS,
  pokemons,
});

export const FETCH__POKEMON__BY__NAME = 'FETCH__POKEMON__BY__NAME';
export const fetchPokemonByName = (pokemon,id,name) => ({
type:FETCH__POKEMON__BY__NAME,
pokemon,
id,
name,
});

export const SAVE__POKEMON__BY__NAME = 'SAVE__POKEMON__BY__NAME';
export const savePokemonByName = (pokemon,id,name) => ({
  type: SAVE__POKEMON__BY__NAME,
  pokemon,
  id,
  name,
});