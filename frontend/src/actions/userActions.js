import axios from 'axios';
import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQ,
	USER_LOGIN_SUCC,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQ,
	USER_REGISTER_SUCC,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQ,
		});
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};
		const { data } = await axios.post(
			'/api/users/login',
			{ email, password },
			config
		);
		dispatch({
			type: USER_LOGIN_SUCC,
			payload: data,
		});
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem('userInfo');
	dispatch({ type: USER_LOGOUT });
};

export const register = (name, email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQ,
		});
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};
		const { data } = await axios.post(
			'/api/users',
			{ name, email, password },
			config
		);
		dispatch({
			type: USER_REGISTER_SUCC,
			payload: data,
		});

		dispatch({
			type: USER_LOGIN_SUCC,
			payload: data,
		});
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};