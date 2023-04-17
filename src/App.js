import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data =await res.json()

    setLoadMore(data.next)

  }

  useEffect(() => {
    getAllPokemons()
  }), [];

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
