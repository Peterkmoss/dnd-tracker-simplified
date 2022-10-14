import Class from './Class'
import Sphere from './Sphere'
import Stat from '../types/Stat'

export default class Player {

  private _hitPoints: number
  get hitPoints() {
    return this._hitPoints
  }
  private set hitPoints(amount: number) {
    if (amount < 0) { 
      this._hitPoints = 0 
      return
    }
    this._hitPoints = Math.min(amount, this._hitPointsMax)
  }
  private _hitPointsMax: number
  get hitPointsMax() {
    return this._hitPointsMax
  }
  private set hitPointsMax(amount: number) {
    this._hitPointsMax = amount
  }

  rolledHP: number

  private _spellPointsMax: number
  get spellPointsMax() {
    return this._spellPointsMax
  }
  private set spellPointsMax(amount: number) {
    this._spellPointsMax = amount
  }

  spellPoints: number = 0
  magicTalents: number = 0
  
  private _classSP: number = 0
  get classSP() {
    return this._classSP
  }
  private set classSP(amount: number) {
    this._classSP = amount
  }
  
  levels: Map<Class, number>

  spheres: Sphere[] = []
  
  stats: Record<Stat, { score: number, modifier: number }>
  
  constructor(keyAbility: Stat, levels: Map<Class, number>, stats: Record<Stat, number>) {
    this.stats = Object.entries(stats).reduce((acc, [stat, score]) => {
      acc[stat] = {
        score,
        modifier: Math.floor((score - 10) / 2)
      }
      return acc
    }, {} as Record<Stat, { score: number, modifier: number }>)

    this.levels = levels

    for (const [c, l] of levels) {
      this.classSP += c.spellPointFunction(l)
      this.magicTalents += c.talentFunction(l)
      this.spheres.push(...c.startingSpheres)
    }

    const KAM = this.stats[keyAbility].modifier
    this.spellPointsMax = KAM + this.classSP
    this.spellPoints = KAM + this.classSP
    
    let startingHP = 0
    for (const [c] of levels) {
      startingHP += c.hitDie.sides
    }
    this.updateRolledHP(startingHP)
    this.updateMaxHpFromRolled()
    this.hitPoints = this.hitPointsMax
  }

  updateKAM(KAM: number) {
    this.spellPointsMax = KAM + this.classSP
  }
  
  updateRolledHP(rolled: number) {
    this.rolledHP = rolled
  }
  
  updateMaxHpFromRolled() {
    let levels = 0
    for (const [,l] of this.levels) {
      levels += l
    }
    this.hitPointsMax = this.rolledHP + (levels * this.stats.Constitution.modifier)
  }
}