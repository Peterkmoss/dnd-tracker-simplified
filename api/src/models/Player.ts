import Class from './Class'
import Sphere from './Sphere'
import Stat from '../types/Stat'
import { Die } from '../util/Dice'
import Movement from '../types/Movement'
import Item from './Item'
import Tradition from './Tradition'
import Currency from '../types/Currency'
import { randomUUID } from 'crypto'

export default class Player {
  id: string
  name: string = 'New character'
  alignment: string = ''
  speed: { [key in Movement]?: number } = {}

  totalLevel: number

  proficiencyBonus: number
  
  background: string = ''
  race: string = ''
  
  armorClass: number
  
  deathSaves: {
    success?: number
    fail?: number
  } = {}
  
  proficiencies: Proficiencies
  languages: string[] = []
  
  currency: { [key in Currency]?: number } = {}
  
  inventory: Item[] = []
  
  tradition?: Tradition
  
  backstory: string = ''
  allies: Record<string, string> = {}
  notes: string = ''
  
  passives: {
    perception: number
    insight: number
    investigation: number
  }
  
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
  
  constructor(id: string = randomUUID(), levels: Map<Class, number>, stats: Record<Stat, number>, proficiencies: Proficiencies) {
    this.id = id
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
      this.classSpellPoints += c.spellPoints[l]
      this.magicTalents += c.magicTalents[l]
      this.hitDiceCurrent.set(c.hitDie, l)
      this.spheres.push(...c.startingSpheres)
      this.totalLevel += l
    }
    this.classSpellPoints = Math.max(this.classSpellPoints, 0)

    this.proficiencyBonus = 2
    for (let i = 2; i <= this.totalLevel; i++) {
      if (i % 4 === 1) {
        this.proficiencyBonus++
      }
    }
      
    this.setKeyAbilityModifier()
    this.setSpellPool()
    this.setHitPoints()
    
    this.setPassives()
    
    this.armorClass = 10 + this.stats.Dexterity.modifier

    this.spellSave = 8 + this.proficiencyBonus + this.keyAbilityModifier
  }
  
  private setPassives() {
    const basePassive = 10
    const wis = this.stats.Wisdom.modifier
    const int = this.stats.Intelligence.modifier
    
    const proficient = (skill: Skill) => (this.proficiencies[skill] ? this.proficiencyBonus : 0)
    
    this.passives = {
      insight: basePassive + wis + proficient('Insight'),
      perception: basePassive + wis + proficient('Perception'),
      investigation: basePassive + int + proficient('Investigation'),
    }
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
    if (this.tradition) {
      this.keyAbilityModifier = this.stats[this.tradition.keyAbility].modifier
    } else {
      this.keyAbilityModifier = 0
    }
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