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
import { createOrderReducer } from './reducers/orderReducers.js';

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateAccount: userUpdateReducer,
	orderCreate: createOrderReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
	cartItems: {
		cartItems: cartItemsFromStorage,
		shippingAddress: shippingAddressFromStorage,
	},
};

const store = legacy_createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
