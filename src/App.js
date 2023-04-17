import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCollection from './components/PokemonCollection.js';

function App() {

  const [ pokemons, setPokemons] = useState([])

  useEffect (() => {
  const getPokemon = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
      console.log(res.data.results)

      res.data.results.forEach( async (pokemon) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
setPokemons((poke) => [...poke, poke.data])
      });
}
getPokemon()
  },[])




  return (
    <div className="App">
    <header className='pokemon'>
      Pokemon
    </header>
    <PokemonCollection />
    </div>
  );
}

export default App;
