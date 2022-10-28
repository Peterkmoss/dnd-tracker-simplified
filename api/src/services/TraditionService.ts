import TraditionDao from '../dao/TraditionDao'
import Repository from '../interfaces/Repository'
import Service from '../interfaces/Service'
import Tradition from '../models/Tradition'

export default class TraditionService implements Service<TraditionDao, string> {
  private repo: Repository<TraditionDao, string>

  constructor(repo: Repository<TraditionDao, string>) {
    this.repo = repo
  }

  async 'new'() {
    return new Tradition(undefined, 'New Tradition', {}, {}, 'Wisdom', [])
  }

  async create(obj: TraditionDao): Promise<string> {
    return await this.repo.create(obj)
  }

  async 'delete'(id: string): Promise<boolean> {
    return await this.repo.remove(id)
  }

  async update(id: string, obj: TraditionDao): Promise<boolean> {
    return await this.repo.update(id, obj)
  }

  async findById(id: string): Promise<TraditionDao> {
    return await this.repo.findById(id)
  }

  async findByName(name: string): Promise<TraditionDao> {
    return await this.repo.findByName(name)
  }

  async findAll(): Promise<TraditionDao[]> {
    return await this.repo.findAll()
  }
}