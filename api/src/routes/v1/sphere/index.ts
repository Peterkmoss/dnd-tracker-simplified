import { Router } from 'express'
import controller from '../../../controllers/SphereController'

const router = Router()

router.post('/:id', async (req, res) => {
  const sphere = req.body
  const { id } = req.params

  const result = await controller.update(id, sphere)
  res.json(result)
})

router.post('/', async (req, res) => {
  const sphere = req.body
  const result = await controller.create(sphere)
  res.json(result)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const result = await controller.remove(id)
  res.json(result)
})

// TODO: Make regex for uuid
router.get('/:id', async (req, res) => {
  const { id } = req.params

  const result = await controller.findById(id)
  res.json(result)
})

router.get('/:name', async (req, res) => {
  const { name } = req.params

  const result = await controller.findByName(name)
  res.json(result)
})

router.get('/', async (req, res) => {
  const result = await controller.findAll()
  res.json(result)
})

export default router
