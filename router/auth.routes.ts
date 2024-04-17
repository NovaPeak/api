import express from 'express'
import { login, signup, verifyOTP } from '../controller/authController';

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/verify-otp', verifyOTP)
export default router;