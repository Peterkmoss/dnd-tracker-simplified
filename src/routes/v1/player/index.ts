import { Router } from 'express'
import { getTestPlayer } from '../../../controllers/PlayerController'

const router = Router()

router.get('/test', (req, res) => {
  res.send(getTestPlayer())
})

export default router