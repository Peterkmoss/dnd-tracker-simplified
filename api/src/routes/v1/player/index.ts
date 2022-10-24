import { Router } from 'express'
import * as controller from '../../../controllers/PlayerController'

const router = Router()

router.post('/save', async (req, res) => {
  const player = req.body
  await controller.savePlayer(player)
  res.json({ success: true })
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const result = await controller.loadPlayer(id)
  res.json(result)
})

export default router