import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productreducers.js';
import { cartReducer } from './reducers/cartReducers.js';

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

const initialState = {};

const store = legacy_createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
