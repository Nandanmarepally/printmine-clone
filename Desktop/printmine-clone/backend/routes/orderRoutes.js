import express from 'express';
import {
  placeOrder,
  getOrders
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected routes
router.post('/place', protect, placeOrder);
router.get('/', protect, getOrders);

export default router;
