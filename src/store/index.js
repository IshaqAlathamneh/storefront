import {createStore, combineReducers , applyMiddleware} from 'redux';
import categories from './categories';
import products from './products';
import cart from './cart';
import button from './button';
import thunk from './middleware/thunk';
// enable an extension on ur browser for redux store checking.. 
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({categories,products, cart, button});

// console.log("reducers >>> " ,reducers);
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();