import { randomUUID } from 'crypto'
import TraditionDao from '../dao/TraditionDao'
import Converter from '../interfaces/Converter'
import Repository from '../interfaces/Repository'
import Tradition from '../models/Tradition'
import ClassType from '../types/ClassType'
import * as IO from '../util/IO'

export default class TraditionRepository implements Repository<TraditionDao, string> {
  private converter: Converter<Tradition, TraditionDao> 
  private type = ClassType.tradition
  
  constructor(facade: Converter<Tradition, TraditionDao>) {
    this.converter = facade
  }

  async findAll(): Promise<TraditionDao[]> {
    return await IO.loadMultiple(this.type, this.converter)
  }

  async findById(id: string): Promise<TraditionDao> {
    return await IO.load(id, this.type, this.converter)
  }
  
  async findByName(name: string): Promise<TraditionDao> {
    const all = await this.findAll()
    return all.find(obj => obj.name === name)
  }

  async create(obj: TraditionDao): Promise<string> {
    const id = obj.id || randomUUID()
    await IO.save(id, this.type, obj)
    return id
  }

  async remove(id: string): Promise<boolean> {
    await IO.remove(id, this.type)
    return true
  }

  async update(id: string, obj: TraditionDao): Promise<boolean> {
    await IO.save(id, this.type, obj)
    return true
  }
}