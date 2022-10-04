import { CART_ADD_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			console.log('CARTITEMS?', state);
			console.log('ITEM', item);
			const existItem = state.cartItems.find((x) => x.product === item.product);
			
			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			} else {
				return [...state.cartItems, item];
			}
			console.log('root?', existItem);
		default:
			return state;
	}
};
