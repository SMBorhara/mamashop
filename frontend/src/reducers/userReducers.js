import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQ,
	USER_LOGIN_SUCC,
	USER_LOGOUT,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQ:
			return { loading: true };
		case USER_LOGIN_SUCC:
			return { loading: false, userInfo: action.payload };
		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};
