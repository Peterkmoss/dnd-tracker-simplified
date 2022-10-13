import { Router } from 'express'
import spheres from './spheres'

const router = Router()

router.use('/sphere', spheres)

export default router