import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const addOrderItems = expressAsyncHandler(async (req, res) => {
	const {
		orderItems,
		shippingAddress,
		payMethod,
		itemsPrice,
		taxPrice,
		shippingPrice,
		totalPrice,
	} = req.body;

	if (orderItems && orderItems.length === 0) {
		res.status(400);
		throw new Error('No items');
		return;
	} else {
		const order = new Order({
			orderItems,
			user: req.user._id,
			shippingAddress,
			payMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
		});

		const createdOrder = await order.save();

		res.status(201).json(createdOrder);
	}
});

export { addOrderItems };
