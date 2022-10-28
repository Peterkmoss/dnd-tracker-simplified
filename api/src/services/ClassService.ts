import ClassDao from '../dao/ClassDao'
import Repository from '../interfaces/Repository'
import Service from '../interfaces/Service'

export default class ClassService implements Service<ClassDao, string> {
  private repo: Repository<ClassDao, string>

  constructor(repo: Repository<ClassDao, string>) {
    this.repo = repo
  }

  async create(obj: ClassDao): Promise<string> {
    return await this.repo.create(obj)
  }

  async 'delete'(id: string): Promise<boolean> {
    return await this.repo.remove(id)
  }

  async update(id: string, obj: ClassDao): Promise<boolean> {
    return await this.repo.update(id, obj)
  }

  async findById(id: string): Promise<ClassDao> {
    return await this.repo.findById(id)
  }

  async findByName(name: string): Promise<ClassDao> {
    return await this.repo.findByName(name)
  }

  async findAll(): Promise<ClassDao[]> {
    return await this.repo.findAll()
  }
}