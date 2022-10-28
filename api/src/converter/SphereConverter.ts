import SphereDao from '../dao/SphereDao'
import Converter from '../interfaces/Converter'
import Sphere from '../models/Sphere'

export default class SphereConverter implements Converter<Sphere, SphereDao> {
  serialize(obj: Sphere): SphereDao {
    return obj
  }
  deserialize(obj: any): Sphere {
    const { id, name, description, abilities, talents, variants } = obj
    return new Sphere(id, name, description, abilities, talents, variants)
  }
}