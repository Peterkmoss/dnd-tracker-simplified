import { Router } from 'express'
import sphere from './sphere'
import player from './player'
import tradition from './tradition'
import classRouter from './class'

const router = Router()

router.use('/player', player)
router.use('/sphere', sphere)
router.use('/tradition', tradition)
router.use('/class', classRouter)

export default router