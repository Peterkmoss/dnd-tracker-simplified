import SphereDao from '../dao/SphereDao'
import Converter from '../interfaces/Converter'
import Repository from '../interfaces/Repository'
import Service from '../interfaces/Service'
import Sphere from '../models/Sphere'

export default class SphereService implements Service<SphereDao, string> {
  private repo: Repository<SphereDao, string>
  private converter: Converter<Sphere, SphereDao>
  
  constructor(repo: Repository<SphereDao, string>, converter: Converter<Sphere, SphereDao>) {
    this.repo = repo
    this.converter = converter
  }

  async create(obj: SphereDao): Promise<string> {
    return await this.repo.create(obj)
  }

  async 'delete'(id: string): Promise<boolean> {
    return await this.repo.remove(id)
  }

  async update(id: string, obj: SphereDao): Promise<boolean> {
    return await this.repo.update(id, obj)
  }

  async findAll(): Promise<SphereDao[]> {
    return await this.repo.findAll()
  }

  async findById(id: string): Promise<SphereDao> {
    return await this.repo.findById(id)
  }

  async findByName(name: string): Promise<SphereDao> {
    return await this.repo.findByName(name)
  }
}