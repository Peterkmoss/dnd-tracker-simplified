import { Router } from 'express'
import repositories from '../../../repositories'

const router = Router()

router.get('/:sphere', (req, res) => {
  const repo = repositories[req.params.sphere]
  if (!repo) {
    res.status(404).send({
      error: `no sphere named: ${req.params.sphere}`
    })
    return
  }
  res.send(repo.getSphere())
})

export default router
