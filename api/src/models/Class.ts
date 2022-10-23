import Feature from '../interfaces/Feature'
import Stat from '../types/Stat'
import { Die } from '../util/Dice'
import Sphere from './Sphere'

export default class Class {
  name: string
  hitDie: Die
  
  savingThrows: Stat[][]

  features: Record<number, Feature[]> = {}
  
  startingSpheres: Sphere[] = []
  
  specializations: Record<string, Record<number, Feature[]>> = {}

  talentFunction: (level: number) => number = () => 0
  spellPointFunction: (level: number) => number = () => 0
  
  classAbilityDie?: Record<number, Die>
  
  constructor(name: string) {
    this.name = name
  }
}