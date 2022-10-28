import TraditionDao from '../dao/TraditionDao'
import Converter from '../interfaces/Converter'
import Tradition from '../models/Tradition'

export default class TraditionConverter implements Converter<Tradition, TraditionDao> {
  serialize(obj: Tradition): Partial<Tradition> {
    throw new Error('Method not implemented.')
  }
  deserialize(obj: any): Tradition {
    throw new Error('Method not implemented.')
  }
}