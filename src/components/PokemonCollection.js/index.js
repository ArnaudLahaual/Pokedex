import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../actions/pokemons";

function PokemonCollection() {


    const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

    const {listPokemons} = useSelector((state) => state.pokemons);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        listPokemons(currenlist => [...currenlist, data])
        console.log(listPokemons)
      })
      createPokemonObject(data.result)
    }

    return(
    <div>
      {
listPokemons.map((pokemon) => (
<h1>{pokemon.name}</h1>
))

      }
 
    </div>
    )
}

export default PokemonCollection;