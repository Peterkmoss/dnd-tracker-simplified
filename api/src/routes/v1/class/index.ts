import { Router } from 'express'
import controller from '../../../controllers/ClassController'

const router = Router()

router.post('/update/:id', async (req, res) => {
  const c = req.body
  const id = req.params.id

  const result = await controller.update(id, c)
  res.json(result)
})

router.get('/new', async (req, res) => {
  const result = await controller.new()
  res.json(result)
})

router.post('/create/:id', async (req, res) => {
  const c = req.body
  const result = await controller.create(c)
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