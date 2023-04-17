import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../actions/pokemons";

function PokemonCollection() {


    const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

    const {listPokemons} = useSelector((state) => state.pokemons);
    console.log(listPokemons);

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