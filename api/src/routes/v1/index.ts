import { Router } from 'express'
import sphere from './sphere'
import player from './player'

const router = Router()

router.use('/player', player)
router.use('/sphere', sphere)

export default router