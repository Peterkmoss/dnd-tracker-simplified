import TraditionBuilder from '../builders/TraditionBuilder'
import PlayerFacade from '../facades/PlayerFacade'
import Class from '../models/Class'
import Player from '../models/Player'
import ClassRepository from '../repositories/classes/ClassRepository'
import { loadPlayer, savePlayer } from '../util/Save'

export function getTestPlayer() {
  const levelMap: Map<Class, number> = new Map([
    [ClassRepository.Incanter(), 1],
  ])
  const proficiencies: Proficiencies = {}
  
  const tradition = new TraditionBuilder()
  .setName('Incanter')
  .setKeyAbility('Charisma')
  .build()

  const player = new Player(
    tradition, 
    levelMap, 
    {
      Charisma: 14,
      Constitution: 11,
      Dexterity: 20,
      Intelligence: 14,
      Strength: 15,
      Wisdom: 4,
    },
  proficiencies)
  return PlayerFacade.serialize(player)
}

export async function saveTestPlayer() {
  const player: any = getTestPlayer()
  savePlayer(player.name, player)
}

export async function loadTestPlayer() {
  return await loadPlayer('New character')
}