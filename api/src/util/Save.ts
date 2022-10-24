import * as fsp from 'fs/promises'
import * as fs from 'fs'
import Player from '../models/Player'
import PlayerFacade from '../facades/PlayerFacade'

export const savePlayer = async (identifier: string, player: Player) => {
  if (!fs.existsSync('db')) {
    await fsp.mkdir('db')
  }
  if (!fs.existsSync(`db/player`)) {
    await fsp.mkdir(`db/player`)
  }
  
  await fsp.writeFile(`db/player/${identifier}`, JSON.stringify(player))
}

export const loadPlayer = async (identifier: string) => {
  const raw = await fsp.readFile(`db/player/${identifier}`, { encoding: 'utf-8', flag: 'r' })
  const json = JSON.parse(raw)
  return PlayerFacade.deserialize(json)
}