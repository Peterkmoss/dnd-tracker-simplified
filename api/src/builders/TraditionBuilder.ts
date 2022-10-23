import Builder from '../interfaces/Builder'
import Sphere from '../models/Sphere'
import Tradition from '../models/Tradition'
import Stat from '../types/Stat'

export default class TraditionBuilder implements Builder<Tradition> {
  private tradition = new Tradition()
  
  constructor() {
    this.tradition.drawbacks = {}
    this.tradition.boons = {}
    this.tradition.spheres = []
  }
  
  setName(name: string): TraditionBuilder { 
    this.tradition.name = name
    return this
  }

  setDrawbacks(drawbacks: Record<string, string>): TraditionBuilder { 
    this.tradition.drawbacks = drawbacks
    return this
  }
  
  setBoons(boons: Record<string, string>): TraditionBuilder {
    this.tradition.boons = boons
    return this
  }

  setKeyAbility(keyAbility: Stat): TraditionBuilder {
    this.tradition.keyAbility = keyAbility
    return this
  }

  setSpheres(spheres: Sphere[]): TraditionBuilder {
    this.tradition.spheres = spheres
    return this
  }
  
  validate() {
    if (!this.tradition.name) { throw new Error('Name not set') }
    if (!this.tradition.keyAbility) { throw new Error('key ability not set') }
  }
  
  build(): Tradition {
    this.validate()

    return this.tradition
  }

}