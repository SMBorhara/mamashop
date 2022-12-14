import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQ,
	USER_LOGIN_SUCC,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQ,
	USER_REGISTER_SUCC,
	USER_DETAILS_FAIL,
	USER_DETAILS_REQ,
	USER_DETAILS_SUCC,
	USER_UPDATE_FAIL,
	USER_UPDATE_REQ,
	USER_UPDATE_SUCC,
	USER_UPDATE_RESET,
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

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQ:
			return { loading: true };
		case USER_REGISTER_SUCC:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userDetailsReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case USER_DETAILS_REQ:
			return { ...state, loading: true };
		case USER_DETAILS_SUCC:
			return { loading: false, userInfo: action.payload };
		case USER_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_REQ:
			return { loading: true };
		case USER_UPDATE_SUCC:
			return { loading: false, success: true, userInfo: action.payload };
		case USER_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		case USER_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
