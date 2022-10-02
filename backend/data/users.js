import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Sarita Doe',
		email: 'sarita@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Raj Doe',
		email: 'raj@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
