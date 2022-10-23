import Class from './Class'
import Sphere from './Sphere'
import Stat from '../types/Stat'
import { Die } from '../util/Dice'
import Movement from '../types/Movement'
import Item from './Item'
import Tradition from './Tradition'

export default class Player {
  name: string = 'New character'
  alignment: string = ''
  speed: { [key in Movement]?: number } = {}

  totalLevel: number

  proficiencyBonus: number
  
  background: string = ''
  race: string = ''
  
  armorClass: number
  
  deathSaves?: {
    success: number
    fail: number
  } = undefined
  
  proficiencies: Proficiencies
  languages: string[] = []
  
  currency: {
    cp?: number
    sp?: number
    gp?: number
    pp?: number
  } = {}
  
  inventory: Item[] = []
  
  tradition: Tradition
  
  backstory: string = ''
  allies: Record<string, string> = {}
  notes: string = ''
  
  passivePerception: number
  passiveInsight: number
  passiveInvestigation: number
  
  hitPoints: {
    current: number
    max: number
    rolled: number
    temporary: number
  }
  
  hitDiceCurrent: Map<Die, number>
  
  spellSave: number

  spellPool: {
    current: number
    max: number
  }
  classSpellPoints: number = 0

  magicTalents: number = 0
  
  levels: Map<Class, number>

  spheres: Sphere[] = []
  
  keyAbilityModifier: number
  stats: Record<Stat, { score: number, modifier: number }>
  
  constructor(tradition: Tradition, levels: Map<Class, number>, stats: Record<Stat, number>, proficiencies: Proficiencies) {
    this.tradition = tradition
    this.levels = levels
    this.stats = Object.entries(stats).reduce((acc, [stat, score]) => {
      acc[stat] = {
        score,
        modifier: Math.floor((score - 10) / 2)
      }
      return acc
    }, {} as Record<Stat, { score: number, modifier: number }>)
    this.proficiencies = proficiencies

    this.hitDiceCurrent = new Map()
    this.totalLevel = 0
    this.classSpellPoints = 0
    this.magicTalents = 0
    for (const [c, l] of levels) {
      this.classSpellPoints += c.spellPointFunction(l)
      this.magicTalents += c.talentFunction(l)
      this.hitDiceCurrent.set(c.hitDie, l)
      this.spheres.push(...c.startingSpheres)
      this.totalLevel += l
    }

    this.proficiencyBonus = 2
    for (let i = 2; i <= this.totalLevel; i++) {
      if (i % 4 === 1) {
        this.proficiencyBonus++
      }
    }
    this.classSpellPoints = this.minOfOne(this.classSpellPoints)
      
    this.setKeyAbilityModifier()
    this.setSpellPool()
    this.setHitPoints()

    this.passiveInsight = 10 + this.stats.Wisdom.modifier + (this.proficiencies['Insight'] ? this.proficiencyBonus : 0)
    this.passiveInvestigation = 10 + this.stats.Intelligence.modifier + (this.proficiencies['Investigation'] ? this.proficiencyBonus : 0)
    this.passivePerception = 10 + this.stats.Wisdom.modifier + (this.proficiencies['Perception'] ? this.proficiencyBonus : 0)
    
    this.armorClass = 10 + this.stats.Dexterity.modifier

    this.spellSave = 8 + this.proficiencyBonus + this.keyAbilityModifier
  }
  
  private setHitPoints() {
    let startingHP = 0
    let levels = 0
    for (const [c, l] of this.levels) {
      startingHP += c.hitDie.sides
      levels += l
    }
    const max = this.minOfOne(startingHP + (levels * this.stats.Constitution.modifier))

    this.hitPoints = {
      current: max,
      max,
      rolled: startingHP,
      temporary: 0
    }
  }
  
  private setKeyAbilityModifier() {
    this.keyAbilityModifier = this.stats[this.tradition.keyAbility].modifier
  }
  
  private setSpellPool() {
    const max = this.minOfOne(this.keyAbilityModifier + this.classSpellPoints)
    this.spellPool = {
      current: max,
      max
    }
  }
  
  private minOfOne(num: number) {
    return Math.max(1, num)
  }
}