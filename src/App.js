import { useEffect, useState } from 'react';
import './App.css';
import { fetchPokemons } from './actions/pokemons';
import { useDispatch } from 'react-redux';

function App() {
const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
    <div className='pokemon-container'>
      Pokemon
    </div>
    <button className='load-more'>Voir plus</button>
    </div>
  );
}

export default App;
