import PlayerFacade from '../facades/PlayerFacade'
import Class from '../models/Class'
import Player from '../models/Player'
import ClassRepository from '../repositories/classes/ClassRepository'

export function getTestPlayer(): PlayerFacade {
  const levelMap: Map<Class, number> = new Map([
    [ClassRepository.Elementalist(), 1]
  ])
  const player = new Player('Dexterity', levelMap, {
    Charisma: 9,
    Constitution: 11,
    Dexterity: 20,
    Intelligence: 14,
    Strength: 15,
    Wisdom: 4,
  })
  return new PlayerFacade(player)
}