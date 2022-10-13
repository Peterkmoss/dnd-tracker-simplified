import PlayerFacade from '../facades/PlayerFacade'
import Class from '../models/Class'
import Player from '../models/Player'
import ClassRepository from '../repositories/ClassRepository'

export function getTestPlayer(): PlayerFacade {
  const levelMap: Map<Class, number> = new Map([
    [ClassRepository.Elementalist(), 1]
  ])
  const player = new Player(3, levelMap)
  return new PlayerFacade(player)
}