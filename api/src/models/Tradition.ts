import { randomUUID } from 'crypto'
import Stat from '../types/Stat'
import Sphere from './Sphere'

type Drawbacks = Record<string, string>
type Boons = Record<string, string>

export default class Tradition {
  id: string
  name: string
  drawbacks: Drawbacks
  boons: Boons
  keyAbility: Stat
  
  spheres: Sphere[]

  bonusSpellPoints(level: number, initialBonus: number, levelScale: number) {
    return initialBonus + Math.floor(level / levelScale)
  }
  
  constructor(id: string = randomUUID(), name: string, drawbacks: Drawbacks, boons: Boons, keyAbility: Stat, spheres: Sphere[]) {
    this.id = id
    this.name = name
    this.drawbacks = drawbacks
    this.boons = boons
    this.keyAbility = keyAbility
    this.spheres = spheres
  }
}