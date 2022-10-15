import express from 'express';
import { get } from 'mongoose';
const router = express.Router();

import {
	getProducts,
	getProductById,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
