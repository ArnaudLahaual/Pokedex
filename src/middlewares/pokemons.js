import axios from 'axios';

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

            // case FETCH__POKEMON__BY__NAME: {


            //     axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            //         .then((res) => {
            //             store.dispatch(savePokemonByName(res.data));
            //             console.log(res);
    
            //         })
            //         .catch((error) => {
            //             console.log(error);
            //         })
            //         next(action);
            //         break
            //     }
            

            default:
                next(action);
                break;
    }
}
export default pokemons;