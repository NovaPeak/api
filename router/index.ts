import express from 'express'
import authRouter from './auth.routes'
import userRouter from './user.routes'
import organizationRouter from './organization.routes'
import { authorize } from '../controller/authorizationController'
const router = express.Router()

router.use('/auth', authRouter)

router.use(authorize)

router.use('/user', userRouter)
router.use('/organization', organizationRouter)

export default router;