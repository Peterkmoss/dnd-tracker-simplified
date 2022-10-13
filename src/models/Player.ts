import Class from './Class'
import Sphere from './Sphere'

export default class Player {
  private _spellPointsMax: number
  get spellPointsMax() {
    return this._spellPointsMax
  }
  private set spellPointsMax(amount: number) {
    this._spellPointsMax = amount
  }

  spellPoints: number = 0
  magicTalents: number = 0
  
  private _bonusSP: number = 0
  get bonusSP() {
    return this._bonusSP
  }
  private set bonusSP(amount: number) {
    this._bonusSP = amount
  }

  levels: Map<Class, number>

  spheres: Sphere[] = []
  
  constructor(KAM: number, levels: Map<Class, number>) {
    this.levels = levels
    for (const [c, l] of levels) {
      this.bonusSP += c.spellPointFunction(l)
      this.magicTalents += c.talentFunction(l)
      this.spheres.push(...c.startingSpheres)
    }
    this.spellPointsMax = KAM + this.bonusSP
    this.spellPoints = KAM + this.bonusSP
  }

  updateKAM(KAM: number) {
    this.spellPointsMax = KAM + this.bonusSP
  }
}