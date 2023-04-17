import { useEffect, useState } from 'react';
import './App.css';
import { fetchPokemonByName, fetchPokemons } from './actions/pokemons';
import { useDispatch } from 'react-redux';
import PokemonCollection from './components/PokemonCollection.js';

function App() {
const dispatch=useDispatch();

  useEffect(() => {

    dispatch(fetchPokemonByName());
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
    <div className='pokemon-container'>
      <PokemonCollection />
    </div>
    <button className='load-more'>Voir plus</button>
    </div>
  );
}

export default App;
