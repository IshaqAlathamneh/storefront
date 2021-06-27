import {createStore, combineReducers} from 'redux';
import categories from './categories';
import products from './products';
// enable an extension on ur browser for redux store checking.. 
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({categories,products});

// console.log("reducers >>> " ,reducers);
const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();