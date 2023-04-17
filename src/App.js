import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [ pokemons, setPokemon] = useState([])

  useEffect (() => {
  const getPokemon = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
      console.log(res);
}
getPokemon()
  },[])


  return (
    <div className="App">
    <header className='pokemon'>
      Pokemon
    </header>
    </div>
  );
}

export default App;
