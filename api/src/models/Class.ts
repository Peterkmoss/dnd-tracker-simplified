import Stat from '../types/Stat'
import { Die } from '../util/Dice'
import Feature from './Feature'
import Sphere from './Sphere'
import { randomUUID } from 'crypto'

type Features = Record<number, Feature[]>
type Specializations = Record<string, Record<number, Feature[]>>
type MagicTalents = Record<number, number>
type SpellPoints = Record<number, number>
type ClassAbilityDie = Record<number, Die>

export default class Class {
  id: string
  name: string
  hitDie: Die
  
  savingThrows: Stat[][]

  features: Features = {}
  
  startingSpheres: Sphere[] = []
  
  specializations: Specializations = {}

  magicTalents: MagicTalents
  spellPoints: SpellPoints
  
  classAbilityDie?: ClassAbilityDie
  
  constructor(id: string = randomUUID(), name: string, hitDie: Die, savingThrows: Stat[][], magicTalents: MagicTalents, spellPoints: SpellPoints, features: Features = {}, startingSpheres: Sphere[] = [], specializations: Specializations = {}, classAbilityDie?: ClassAbilityDie) {
    this.id = id
    this.name = name
    this.hitDie = hitDie
    this.savingThrows = savingThrows
    this.magicTalents = magicTalents
    this.spellPoints = spellPoints
    this.features = features
    this.startingSpheres = startingSpheres
    this.specializations = specializations
    this.classAbilityDie = classAbilityDie
  }
}