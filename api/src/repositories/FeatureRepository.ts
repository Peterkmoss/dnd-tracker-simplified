import FeatureDao from '../dao/FeatureDao'
import Repository from '../interfaces/Repository'

export default class FeatureRepository implements Repository<FeatureDao, string> {
  findAll(): Promise<FeatureDao[]> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<FeatureDao> {
    throw new Error('Method not implemented.')
  }
  findByName(name: string): Promise<FeatureDao> {
    throw new Error('Method not implemented.')
  }
  create(obj: FeatureDao): Promise<string> {
    throw new Error('Method not implemented.')
  }
  remove(id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  update(id: string, obj: FeatureDao): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}