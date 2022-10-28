import SphereDao from '../dao/SphereDao'
import Repository from '../interfaces/Repository'
import Service from '../interfaces/Service'

export default class SphereService implements Service<SphereDao, string> {
  private repo: Repository<SphereDao, string>
  
  constructor(repo: Repository<SphereDao, string>) {
    this.repo = repo
  }
  
  async 'new'(): Promise<SphereDao> {
    throw new Error('Method not implemented')
  }

  async create(obj: SphereDao): Promise<string> {
    throw new Error('Method not implemented')
  }

  async 'delete'(id: string): Promise<boolean> {
    throw new Error('Method not implemented')
  }

  async update(id: string, obj: SphereDao): Promise<boolean> {
    throw new Error('Method not implemented')
  }

  async findAll(): Promise<SphereDao[]> {
    throw new Error('Method not implemented')
  }

  async findById(id: string): Promise<SphereDao> {
    throw new Error('Method not implemented')
  }

  async findByName(name: string): Promise<SphereDao> {
    throw new Error('Method not implemented')
  }
}