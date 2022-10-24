import Stat from "../types/Stat"
import Sphere from "./Sphere"

export default class Tradition {
  name: string
  drawbacks: Record<string, string>
  boons: Record<string, string>
  keyAbility: Stat
  
  spheres: Sphere[]

  bonusSpellPoints(level: number, initialBonus: number, levelScale: number) {
    return initialBonus + Math.floor(level / levelScale)
  }
  
  static getBaseTradition() {
    const tradition = new this()

    tradition.name = 'new tradition'
    tradition.drawbacks = {}
    tradition.boons = {}
    tradition.keyAbility = 'Wisdom'
    tradition.spheres = []

    return tradition
  }
}