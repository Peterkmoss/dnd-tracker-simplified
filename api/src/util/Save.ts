import * as fsp from 'fs/promises'
import * as fs from 'fs'
import Player from '../models/Player'

export const savePlayer = async (identifier: string, player: Player) => {
  if (!fs.existsSync('db')) {
    fsp.mkdir('db')
  }
  if (!fs.existsSync(`db/player`)) {
    fsp.mkdir(`db/player`)
  }
  
  await fsp.writeFile(`db/player/${identifier}`, JSON.stringify(player))
}

export const loadPlayer = async (identifier: string) => {
  const raw = await fsp.readFile(`db/player/${identifier}`, { encoding: 'utf-8', flag: 'r' })
  const json = JSON.parse(raw)
  const proto: Player = Object.create(Player.prototype)
  Player.apply(proto, Object.entries(json))
  return proto
}