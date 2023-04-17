import{ FETCH__POKEMONS, SAVE__POKEMONS, SAVE__POKEMON__BY__NAME} from '../actions/pokemons';

const initialState = {
    listPokemons: [],
    id:'',
    name:'',
    url:'',
}

function reducer(state = initialState, action ={} ){
    switch(action.type) {
        case SAVE__POKEMONS:
            return {
                ...state,
                listPokemons: action.pokemons,
            };
            case SAVE__POKEMON__BY__NAME:
                return {
                ...state,
                listPokemons: action.pokemons,
                name: action.name,
                };
      
  
            
    default:
        return state;
    }
}

export default reducer;
