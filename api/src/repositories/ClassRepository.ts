import Class from '../models/Class'
import Repository from '../interfaces/Repository'
import ClassDao from '../dao/ClassDao'
import Converter from '../interfaces/Converter'
import ClassType from '../types/ClassType'
import * as IO from '../util/IO'
import { randomUUID } from 'crypto'

export default class ClassRepository implements Repository<ClassDao, string> {
  private converter: Converter<Class, ClassDao>
  private type = ClassType.class

  constructor(converter: Converter<Class, ClassDao>) {
    this.converter = converter
  }

  async findAll(): Promise<ClassDao[]> {
    return await IO.loadMultiple(this.type, this.converter)
  }

  async findById(id: string): Promise<ClassDao> {
    return await IO.load(id, this.type, this.converter)
  }

  async findByName(name: string): Promise<ClassDao> {
    const all = await this.findAll()
    return all.find(obj => obj.name === name)
  }

  async create(obj: ClassDao): Promise<string> {
    const id = obj.id || randomUUID()
    await IO.save(id, this.type, obj)
    return id
  }

  async remove(id: string): Promise<boolean> {
    await IO.remove(id, this.type)
    return true
  }

  async update(id: string, obj: ClassDao): Promise<boolean> {
    await IO.save(id, this.type, obj)
    return true
  }
}