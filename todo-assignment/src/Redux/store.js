import {createStore, compose, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import thunk from 'redux-thunk';
const composeEnhancers = 
// process.env.NODE_ENV = 'development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null||
compose;

export const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...[thunk])
));

