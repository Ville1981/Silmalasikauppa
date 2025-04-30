import express from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Julkiset reitit
router.post('/register', registerUser);
router.post('/login', loginUser);

// Suojatut reitit
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.delete('/profile', protect, deleteUserProfile);

export default router;
