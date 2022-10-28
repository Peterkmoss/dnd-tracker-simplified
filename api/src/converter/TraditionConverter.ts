import TraditionDao from '../dao/TraditionDao'
import Converter from '../interfaces/Converter'
import Tradition from '../models/Tradition'

export default class TraditionConverter implements Converter<Tradition, TraditionDao> {
  serialize(obj: Tradition): Partial<Tradition> {
    return obj
  }
  deserialize(obj: any): Tradition {
    const { id, name, drawbacks, boons, keyAbility, spheres } = obj
    return new Tradition(id, name, drawbacks, boons, keyAbility, spheres)
  }
}