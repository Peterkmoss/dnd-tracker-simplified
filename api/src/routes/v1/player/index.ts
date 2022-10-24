import { Router } from 'express'
import * as controller from '../../../controllers/PlayerController'

const router = Router()

router.get('/test', async (req, res) => {
  res.send(controller.getTestPlayer())
})

router.get('/save', async (req, res) => {
  await controller.saveTestPlayer()
  res.send()
})

router.get('/load', async (req, res) => {
  res.send(await controller.loadTestPlayer())
})

export default router