import express from 'express';
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Julkiset reitit
router.get('/', getProducts);
router.get('/:id', getProductById);

// Suojattu reitti (esim. admin voi luoda tuotteen)
router.post('/', protect, createProduct);

export default router;
