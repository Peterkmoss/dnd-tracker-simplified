import Service from '../interfaces/Service'
import Repository from '../interfaces/Repository'
import Player from '../models/Player'
import Stat from '../types/Stat'
import PlayerDao from '../dao/PlayerDao'
import Converter from '../interfaces/Converter'

export default class PlayerService implements Service<PlayerDao, string> {
  private repo: Repository<PlayerDao, string>
  private converter: Converter<Player, PlayerDao>

  constructor(repo: Repository<PlayerDao, string>, converter: Converter<Player, PlayerDao>) {
    this.repo = repo
    this.converter = converter
  }

  async create(obj: PlayerDao): Promise<string> {
    return await this.repo.create(obj)
  }

  async 'delete'(id: string): Promise<boolean> {
    return await this.repo.remove(id)
  }

  async update(id: string, obj: PlayerDao): Promise<boolean> {
    return await this.repo.update(id, obj)
  }

  async findById(id: string): Promise<PlayerDao> {
    return await this.repo.findById(id)
  }

  async findByName(name: string): Promise<PlayerDao> {
    return await this.repo.findByName(name)
  }

  async findAll(): Promise<PlayerDao[]> {
    return await this.repo.findAll()
  }
}