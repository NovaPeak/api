import express from 'express'
import { me } from '../controller/userController';

const router = express.Router()

router.get('/me', me)
export default router;