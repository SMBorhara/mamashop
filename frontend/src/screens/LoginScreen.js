import React, { useEffect } from 'react';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions.js';
import { useState } from 'react';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	const location = useLocation();
	const navigate = useNavigate();
	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<FormContainer>
			<h1>Login</h1>
			{error && <Message variant="danger">Invalid Email or Password</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="email">
					<Form.Label>Email:</Form.Label>
					<Form.Control
						type="email"
						placeholder="enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>Password:</Form.Label>
					<Form.Control
						type="password"
						placeholder="enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button type="submit" variant="primary">
					Login
				</Button>
			</Form>
			<Row className="py-3">
				<Col>
					Not Registered?{' '}
					<Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
						Create Account
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default LoginScreen;
