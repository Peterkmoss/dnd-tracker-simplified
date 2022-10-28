import DieDao from '../dao/DieDao'
import Converter from '../interfaces/Converter'
import Die from '../models/Die'

export default class DieConverter implements Converter<Die, DieDao> {
  serialize(obj: Die): DieDao {
    return obj
  }
  deserialize(obj: any): Die {
    const { sides } = obj
    return new Die(sides)
  }
}