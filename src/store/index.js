import { createStore, applyMiddleware, compose } from "redux";

import reducer from '../reducers';
import pokemons from '../middlewares/pokemons';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(pokemons),
);

const store = createStore(reducer, enhancers);

export default store;
