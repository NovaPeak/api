import express from 'express'
import authRouter from './auth.routes'
import { authorize } from '../controller/authorizationController'
const router = express.Router()

router.use('/auth', authRouter)

router.use(authorize)

router.use('/user',)

export default router;