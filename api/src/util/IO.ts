import * as fsp from 'fs/promises'
import * as fs from 'fs'
import PlayerFacade from '../facades/PlayerFacade'

export const savePlayer = async (identifier: string, player: any) => {
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

export const removePlayer = async (identifier: string) => {
  await fsp.rm(`db/player/${identifier}`)
}

export const loadPlayers = async () => {
  const files = await fsp.readdir(`db/player`)
  const players = []
  for (const file of files) {
    players.push(loadPlayer(file))
  }
  return players
}