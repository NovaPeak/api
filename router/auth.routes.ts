import express from 'express'
import { login, signup, verifyOTP } from '../controller/authController';
import { loginOrganization } from '../controller/organizationController';

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/verify-otp', verifyOTP)
router.post('/organization-login', loginOrganization)
export default router;