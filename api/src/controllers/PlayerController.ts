import TraditionBuilder from '../builders/TraditionBuilder'
import PlayerFacade from '../facades/PlayerFacade'
import Class from '../models/Class'
import Player from '../models/Player'
import ClassRepository from '../repositories/ClassRepository'
import * as IO from '../util/IO'

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
    'test1234test',
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
    proficiencies
  )
  
  player.speed.Walk = 30

  return PlayerFacade.serialize(player)
}

export async function savePlayer(player: any) {
  try {
    await IO.savePlayer(player.id, player)
    return true
  } catch (e: any) {
    console.error(e)
    return false
  }
}

export async function loadPlayer(id: string) {
  try {
    return await IO.loadPlayer(id)
  } catch (e: any) {
    console.error(e)
    return { success: false }
  }
}