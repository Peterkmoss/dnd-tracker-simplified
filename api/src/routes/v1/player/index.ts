import { Router } from 'express'
import * as controller from '../../../controllers/PlayerController'

const router = Router()

router.get('/test', async (req, res) => {
  res.send(controller.getTestPlayer())
})

router.get('/test/save', async (req, res) => {
  await controller.saveTestPlayer()
  res.json({ success: true })
})

router.post('/save', async (req, res) => {
  const player = req.body
  await controller.savePlayer(player)
  res.json({ success: true })
})

router.get('/load', async (req, res) => {
  res.json(await controller.loadTestPlayer())
})

export default router