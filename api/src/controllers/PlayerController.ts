import TraditionBuilder from '../builders/TraditionBuilder'
import PlayerFacade from '../facades/PlayerFacade'
import Class from '../models/Class'
import Player from '../models/Player'
import ClassRepository from '../repositories/ClassRepository'
import PlayerRepository from '../repositories/PlayerRepository'
import * as IO from '../util/IO'

const repo = new PlayerRepository()

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

export async function newPlayer() {
  try {
    return Player.getBasePlayer()
  } catch (e) {
    console.error(e)
    return null
  }
}

export async function create(player: any) {
  try {
    return await repo.create(player)
  } catch (e: any) {
    console.error(e)
    return null
  }
}

export async function update(id: string, player: any) {
  try {
    return await repo.update(id, player)
  } catch (e: any) {
    console.error(e)
    return false
  }
}

export async function findAll() {
  try {
    return await repo.findAll()
  } catch (e: any) {
    console.error(e)
    return []
  }
}

export async function findById(id: string) {
  try {
    return await repo.findById(id)
  } catch (e: any) {
    console.error(e)
    return null
  }
}

export async function remove(id: string) {
  try {
    return await repo.remove(id)
  } catch (e: any) {
    console.error(e)
    return false
  }
}