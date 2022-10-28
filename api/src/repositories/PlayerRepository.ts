import PlayerDao from '../dao/PlayerDao'
import * as IO from '../util/IO'
import { randomUUID } from 'crypto'
import Repository from '../interfaces/Repository'
import ClassType from '../types/ClassType'
import Converter from '../interfaces/Converter'
import Player from '../models/Player'

export default class PlayerRepository implements Repository<PlayerDao, string> {
  private converter: Converter<Player, PlayerDao>
  private type = ClassType.player

  constructor(converter: Converter<Player, PlayerDao>) {
    this.converter = converter
  }

  async findAll(): Promise<PlayerDao[]> {
    return await IO.loadMultiple(this.type, this.converter)
  }

  async findById(id: string): Promise<PlayerDao> {
    return await IO.load(id, this.type, this.converter)
  }

  async findByName(name: string): Promise<PlayerDao> {
    const all = await this.findAll()
    return all.find(obj => obj.name === name)
  }

  async create(obj: PlayerDao): Promise<string> {
    const id = obj.id || randomUUID()
    await IO.save(id, this.type, obj)
    return id
  }

  async remove(id: string): Promise<boolean> {
    await IO.remove(id, this.type)
    return true
  }

  async update(id: string, obj: PlayerDao): Promise<boolean> {
    await IO.save(id, this.type, obj)
    return true
  }
}