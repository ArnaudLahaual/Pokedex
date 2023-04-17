import{ FETCH__POKEMONS, SAVE__POKEMONS} from '../actions/pokemons';

const initialState = {
    listPokemons: [],
}

function reducer(state = initialState, action ={} ){
    switch(action.type) {
        case SAVE__POKEMONS:
            return {
                ...state,
                listPokemons: action.pokemons,
            };
  
            
    default:
        return state;
    }
}

export default reducer;
