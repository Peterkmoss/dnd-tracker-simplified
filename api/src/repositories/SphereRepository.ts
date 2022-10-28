import { randomUUID } from 'crypto'
import SphereDao from '../dao/SphereDao'
import Converter from '../interfaces/Converter'
import Repository from '../interfaces/Repository'
import Sphere from '../models/Sphere'
import ClassType from '../types/ClassType'
import * as IO from '../util/IO'

export default class SphereRepository implements Repository<SphereDao, string> {
  private converter: Converter<Sphere, SphereDao> 
  private type = ClassType.sphere
  
  constructor(facade: Converter<Sphere, SphereDao>) {
    this.converter = facade
  }

  async findAll(): Promise<SphereDao[]> {
    return await IO.loadMultiple(this.type, this.converter)
  }

  async findById(id: string): Promise<SphereDao> {
    return await IO.load(id, this.type, this.converter)
  }
  
  async findByName(name: string): Promise<SphereDao> {
    const all = await this.findAll()
    return all.find(obj => obj.name === name)
  }

  async create(obj: SphereDao): Promise<string> {
    const id = obj.id || randomUUID()
    await IO.save(id, this.type, obj)
    return id
  }

  async remove(id: string): Promise<boolean> {
    await IO.remove(id, this.type)
    return true
  }

  async update(id: string, obj: SphereDao): Promise<boolean> {
    await IO.save(id, this.type, obj)
    return true
  }
}