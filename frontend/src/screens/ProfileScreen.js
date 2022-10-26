import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserAccount } from '../actions/userActions.js';
import { useState } from 'react';

const ProfileScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userDetails = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userDetails;

	// const userUpdate = useSelector((state) => state.updateUserAccount);
	// console.log(updateUserAccount);
	// const { success } = userUpdate;

	const navigate = useNavigate();

	useEffect(() => {
		if (!userInfo) {
			navigate('/login');
		} else if (!userInfo.name) {
			dispatch(getUserDetails('profile'));
		} else {
			setName(userInfo.name);
			setEmail(userInfo.email);
		}
	}, [dispatch, navigate, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!name || !email || !password) {
			setMessage('All Fields Must Be filled');
		} else if (email) {
			setMessage('User Exists');
		} else if (password !== confirmPass) {
			setMessage('Passwords do not match');
		} else {
			dispatch(updateUserAccount({ id: userInfo._id, name, email, password }));
		}
	};

	return (
		<Row>
			<Col md={3}>
				<h1>User Account</h1>
				{message && <Message variant="danger">{message} </Message>}
				{error && <Message variant="danger">{error}</Message>}
				{/* {success && <Message variant="success">Account Updated</Message>} */}
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
						Save
					</Button>
				</Form>
			</Col>
			<Col md={9}>
				<h2>My Orders</h2>
			</Col>
		</Row>
	);
};

export default ProfileScreen;
