const products = [
	{
		_id: '1',
		name: 'Airpods Wireless Bluetooth Headphones',
		image: '/images/airpods.jpg',
		description:
			'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
		brand: 'Apple',
		category: 'Electronics',
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		_id: '2',
		name: 'iPhone 11 Pro 256GB Memory',
		image: '/images/phone.jpg',
		description:
			'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
		brand: 'Apple',
		category: 'Electronics',
		price: 599.99,
		countInStock: 7,
		rating: 4.0,
		numReviews: 8,
	},
	{
		_id: '3',
		name: 'MacBook Pro',
		image: '/images/macbookpro.jpg',
		description: '14 inch MacBook in space gray with 512gb of data.',
		brand: 'Apple',
		category: 'Electronics',
		price: 1999.99,
		countInStock: 2,
		rating: 4,
		numReviews: 17,
	},
	{
		_id: '4',
		name: 'Makeup Brush Set',
		image: '/images/makeupbrushestinted.jpg',
		description:
			'Complete set of brushes with purple tint to complete your full face of makeup',
		brand: 'Sephora',
		category: 'Beauty',
		price: 499.99,
		countInStock: 7,
		rating: 4,
		numReviews: 8,
	},
	{
		_id: '5',
		name: 'Make it yours mug',
		image: '/images/personalizedcoffeemug.jpg',
		description:
			'16 oz plain coffee mug with space for personalized message or name',
		brand: 'Coffeemate',
		category: 'Dining',
		price: 15.99,
		countInStock: 3,
		rating: 4.5,
		numReviews: 10,
	},
	{
		_id: '6',
		name: 'Amazon Echo Dot 3rd Generation',
		image: '/images/alexa.jpg',
		description:
			'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
		brand: 'Amazon',
		category: 'Electronics',
		price: 29.99,
		countInStock: 0,
		rating: 4,
		numReviews: 12,
	},
	{
		_id: '7',
		name: 'Unisex Retro Style Sneaker',
		image: '/images/80ssneaker.jpg',
		description:
			'Take your style back to the eighties with these colorful unisex sneakers. Make NKOTB jealous.',
		brand: 'Adidas',
		category: 'Apparel',
		price: 79.99,
		countInStock: 5,
		rating: 5,
		numReviews: 23,
	},
	{
		_id: '8',
		name: 'Beats By Dre, Solo Gold',
		image: '/images/beatsgold.jpg',
		description:
			'With up to 40 hours of battery life, Beats Solo³ Wireless is your perfect everyday headphone. With Fast Fuel, a 5-minute charge gives you 3 hours of playback. Enjoy award-winning Beats sound with Class 1 Bluetooth® wireless listening freedom. The on-ear, cushioned ear cups are adjustable so you can customize your fit for all-day comfort.',
		brand: 'Beats',
		category: 'Electronics',
		price: 199.99,
		countInStock: 0,
		rating: 3.5,
		numReviews: 7,
	},
	{
		_id: '9',
		name: 'Coffee Buzz Set',
		image: '/images/coffeeset.jpg',
		description:
			'9 ounce coffee mug with matching saucer. Keeps liquid warm for moms who hate beverages that went cold. Dishwasher safe. Other colors.',
		brand: 'Coffee Buzz',
		category: 'Dining',
		price: 16.99,
		countInStock: 25,
		rating: 5,
		numReviews: 2,
	},
	{
		_id: '10',
		name: 'Apple Watch',
		image: '/images/applewatch.jpg',
		description:
			'Stay connected to your health and life in a stylish way and with a quick glance at your wrist. Innovative features and added pluses with the new model. ',
		brand: 'Apple',
		category: 'Electronics',
		price: 399.99,
		countInStock: 11,
		rating: 5,
		numReviews: 242,
	},
	{
		_id: '11',
		name: 'Eyeshadow Palette',
		image: '/images/eyepalette.jpg',
		description:
			'An eyeshadow palette that redefines neutral with 12 universally flattering shades in finishes that range from matte to metallic.',
		brand: 'Urban Decay',
		category: 'Beauty',
		price: 44.99,
		countInStock: 30,
		rating: 4.5,
		numReviews: 235,
	},
	{
		_id: '12',
		name: 'Face Mist',
		image: '/images/facemist.jpg',
		description:
			'A quickly hydrating face mist that soothes, helps to reduce the look of pores, and softens all day for supple, dewy skin—pre- or post-makeup.',
		brand: 'fresh',
		category: 'Beauty',
		price: 24.0,
		countInStock: 15,
		rating: 5,
		numReviews: 10,
	},
	{
		_id: '13',
		name: "Nike Women's Dunk High",
		image: '/images/hightop.jpg',
		description: 'Nike hightop women dunk style basketball sneaker',
		brand: 'Nike',
		category: 'Apparel',
		price: 225.0,
		countInStock: 2,
		rating: 5,
		numReviews: 3432,
	},
	{
		_id: '14',
		name: 'Hydrating Daily Tinted Lip Balm',
		image: '/images/liptint.jpg',
		description:
			'Lip softening balm that comes in various colors include natural or nude.',
		brand: 'rms beauty',
		category: 'Beauty',
		price: 22.0,
		countInStock: 32,
		rating: 4,
		numReviews: 200,
	},
	{
		_id: '15',
		name: 'Polaroid Camera',
		image: '/images/polaroid.jpg',
		description: 'Blue tooth connected instant film camera',
		brand: 'Polaroid',
		category: 'Electronics',
		price: 149.99,
		countInStock: 8,
		rating: 4.5,
		numReviews: 741,
	},
	{
		_id: '16',
		name: 'Wine Glass',
		image: '/images/redwhiteglass.jpg',
		description:
			'Wine glasses for both red and white wine varieties, set of 2.',
		brand: 'Wino',
		category: 'Dining',
		price: 23.74,
		countInStock: 6,
		rating: 3,
		numReviews: 231,
	},
	{
		_id: '17',
		name: 'Sunglass',
		image: '/images/sunglass.jpg',
		description: 'Wayfarer style sunglass in black or red.',
		brand: 'RayBan',
		category: 'Apparel',
		price: 163.0,
		countInStock: 27,
		rating: 4.5,
		numReviews: 7110,
	},
	{
		_id: '18',
		name: 'Water Can',
		image: '/images/watercan.jpg',
		description: '40oz stainless steel jug for hot or cold beverages',
		brand: 'Liquid Gold',
		category: 'Dining',
		price: 19.97,
		countInStock: 0,
		rating: 5,
		numReviews: 12,
	},
];

export default products;
