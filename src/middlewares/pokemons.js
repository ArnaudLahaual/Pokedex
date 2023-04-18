import axios from 'axios';
import slugify from 'react-slugify';

import { FETCH__POKEMONS, FETCH__POKEMON__BY__NAME, savePokemonByName, savePokemons } from '../actions/pokemons';

const pokemons = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH__POKEMONS: {

            axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
                .then((res) => {
                    store.dispatch(savePokemons(res.data.results));
                    console.log(res);

                })
                .catch((error) => {
                    console.log(error);
                })
                next(action);
                break
            }

            case FETCH__POKEMON__BY__NAME: {

      const {pokemons : { name } } = store.getState();
      const pokemonSlug = slugify(name);

                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSlug}`)
                    .then((res) => {
                        store.dispatch(savePokemonByName(res.data));
                        console.log(res);
    
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    next(action);
                    break
                }
            

            default:
                next(action);
                break;
    }
}
export default pokemons;