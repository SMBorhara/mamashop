import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Checkout from '../components/Checkout';
import { saveShippingAddress } from '../actions/cartActions.js';

const ShippingScreen = () => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [state, setState] = useState(shippingAddress.state);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.PreventDefault();
		dispatch(saveShippingAddress({ address, city, postalCode, state }));
		navigate('../payment', { replace: true });
	};

	return (
		<FormContainer>
			<Checkout s1 s2 />
			<h1>Shipping</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="address">
					<Form.Label>Address:</Form.Label>
					<Form.Control
						type="text"
						placeholder="enter address"
						value={address}
						required
						onChange={(e) => setAddress(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="city">
					<Form.Label>City:</Form.Label>
					<Form.Control
						type="text"
						placeholder="enter city"
						value={city}
						required
						onChange={(e) => setCity(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="state">
					<Form.Label>State:</Form.Label>
					<Form.Control
						type="text"
						placeholder="enter state"
						value={state}
						required
						onChange={(e) => setState(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="postalCode">
					<Form.Label>Postal Code:</Form.Label>
					<Form.Control
						type="text"
						placeholder="enter zip"
						value={postalCode}
						required
						onChange={(e) => setPostalCode(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Button type="submit" variant="primary">
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};

export default ShippingScreen;
