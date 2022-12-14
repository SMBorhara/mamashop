import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PayMethodScreen from './screens/PayMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

const App = () => {
	return (
		<Router>
			<Header />

			<main className="py-3">
				<Container>
					<Routes>
						<Route path="/shipping" element={<ShippingScreen />} />
						<Route path="/payment" element={<PayMethodScreen />} />
						<Route path="/placeorder" element={<PlaceOrderScreen />} />
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/register" element={<RegisterScreen />} />
						<Route path="/profile" element={<ProfileScreen />} />
						<Route path="/product/:id" element={<ProductScreen />} />
						<Route path="/cart/:id" element={<CartScreen />} />
						<Route path="/cart" element={<CartScreen />} />
						<Route path="/" element={<HomeScreen />} />
					</Routes>
				</Container>
			</main>

			<Footer />
		</Router>
	);
};

export default App;
