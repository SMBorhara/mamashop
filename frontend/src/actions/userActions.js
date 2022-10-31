import axios from 'axios';
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

export const getUserDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_DETAILS_REQ,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		const { data } = await axios.get(`/api/users/${id}`, config);
		dispatch({
			type: USER_DETAILS_SUCC,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === 'Not authorized, token failed') {
			dispatch(logout());
		}
		dispatch({
			type: USER_DETAILS_FAIL,
			payload: message,
		});
	}
};

export const updateUserAccount = (user) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_UPDATE_REQ,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		const { data } = await axios.put(`/api/users/profile`, user, config);

		dispatch({
			type: USER_UPDATE_SUCC,
			payload: data,
		});

		dispatch({
			type: USER_LOGIN_SUCC,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
