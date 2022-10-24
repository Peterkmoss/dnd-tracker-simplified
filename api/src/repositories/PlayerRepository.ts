import PlayerDao from '../types/PlayerDao'
import * as IO from '../util/IO'
import { randomUUID } from 'crypto'

interface CrudRepository<T, I> {
  findAll(): Promise<T[]>
  findById(id: I): Promise<T>
  create(obj: T): Promise<I>
  remove(id: I): Promise<boolean>
  update(id: I, obj: T): Promise<boolean>
}

export default class PlayerRepository implements CrudRepository<PlayerDao, string> {
  async findAll(): Promise<PlayerDao[]> {
    return await IO.loadPlayers()
  }

  async findById(id: string): Promise<PlayerDao> {
    return await IO.loadPlayer(id)
  }

  async create(obj: PlayerDao): Promise<string> {
    const id = obj.id || randomUUID()
    await IO.savePlayer(id, obj)
    return id
  }

  async remove(id: string): Promise<boolean> {
    await IO.removePlayer(id)
    return true
  }

  async update(id: string, obj: PlayerDao): Promise<boolean> {
    await IO.savePlayer(id, obj)
    return true
  }
}