import { Router } from 'express'
import controller from '../../../controllers/TraditionController'

const router = Router()

router.post('/:id', async (req, res) => {
  const tradition = req.body
  const id = req.params.id

  const result = await controller.update(id, tradition)
  res.json(result)
})

router.post('/', async (req, res) => {
  const tradition = req.body
  const result = await controller.create(tradition)
  res.json(result)
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const result = await controller.remove(id)
  res.json(result)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  const result = await controller.findById(id)
  res.json(result)
})

router.get('/', async (req, res) => {
  const result = await controller.findAll()
  res.json(result)
})

export default router