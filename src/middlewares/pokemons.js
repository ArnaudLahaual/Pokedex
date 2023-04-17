import axios from 'axios';

import { FETCH__POKEMONS, savePokemons } from '../actions/pokemons';

const pokemons = (store) => (next) => (action) => {
    switch(action.type) {
        case FETCH__POKEMONS: {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
                .then((response) => {
                    store.dispatch(savePokemons(response.data));
                    console.log(response);
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