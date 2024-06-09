import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'
import ItemReducer from '../reducers/items';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        items: ItemReducer
    }),  
    composeEnhancers(applyMiddleware(thunk))

);

    return store; 

};