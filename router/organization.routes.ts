import express from 'express'
import { createOrganization, getOrganization } from '../controller/organizationController'

const router = express.Router()

router.route('/').get(getOrganization).post(createOrganization)

export default router;