import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  registerAdmin,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.route('/admin').post(protect, registerAdmin);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
