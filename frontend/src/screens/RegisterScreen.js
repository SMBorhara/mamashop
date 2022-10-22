import React, { useEffect } from 'react';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions.js';
import { useState } from 'react';

const RegisterScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userRegister;

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
		if (!name || !email || !password) {
			setMessage('All Fields Must Be filled');
		} else if (email) {
			setMessage('User Exists');
		} else if (password !== confirmPass) {
			setMessage('Passwords do not match');
		} else {
			dispatch(register(name, email, password));
		}
	};

	return (
		<FormContainer>
			<h1>Create Account</h1>
			{message && <Message variant="danger">{message} </Message>}
			{error && <Message variant="danger">{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="name">
					<Form.Label>Full Name:</Form.Label>
					<Form.Control
						type="name"
						placeholder="enter name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group>
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
				<Form.Group controlId="confirmPassword">
					<Form.Label>Confirm Password:</Form.Label>
					<Form.Control
						type="confirmPassword"
						placeholder="confirm password"
						value={confirmPass}
						onChange={(e) => setConfirmPass(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button type="submit" variant="primary">
					Create
				</Button>
			</Form>
			<Row className="py-3">
				<Col>
					Already Registered?{' '}
					<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
						Login
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default RegisterScreen;
