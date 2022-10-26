import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productreducers.js';
import { cartReducer } from './reducers/cartReducers.js';
import {
	userDetailsReducer,
	userLoginReducer,
	userRegisterReducer,
	userUpdateReducer,
} from './reducers/userReducers.js';

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateAccount: userUpdateReducer,
});

const initialState = {};

const store = legacy_createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
