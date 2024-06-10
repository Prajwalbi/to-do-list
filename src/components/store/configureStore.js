import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'
import ItemReducer from '../reducers/items';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        items: ItemReducer,
        filters: filtersReducer,
        auth: authReducer
    }),  
    composeEnhancers(applyMiddleware(thunk))

);

    return store; 

};