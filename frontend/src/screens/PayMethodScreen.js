import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Checkout from '../components/Checkout';
import { savePayMethod } from '../actions/cartActions.js';

const PayMethodScreen = () => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	const navigate = useNavigate();

	if (!shippingAddress) {
		navigate('/shipping');
	}

	const [payMethod, setPayMethod] = useState('PayPal');

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.PreventDefault();
		dispatch(savePayMethod(payMethod));
		navigate('/placeorder');
	};

	return (
		<FormContainer>
			<Checkout s1 s2 s3 />
			<h1>Payment Method</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Label as="legend">Select Method</Form.Label>

					<Col>
						<Form.Check
							type="radio"
							label="PayPal or Credit Card"
							id="PayPal"
							name="payMethod"
							value="PayPal"
							checked
							onChange={(e) => setPayMethod(e.target.value)}
						></Form.Check>
					</Col>
				</Form.Group>
				<Button type="submit" variant="primary">
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};

export default PayMethodScreen;
