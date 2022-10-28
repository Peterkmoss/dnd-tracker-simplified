import Ability from '../types/Ability'
import Talent from '../interfaces/Talent'
import { randomUUID } from 'crypto'

type Talents = Record<string, {
  intro?: string
  list: Talent[]
}>

type Variants = Record<string, string>

export default class Sphere {
  id: string
  name: string
  description: string
  abilities: Ability[]
  talents: Talents
  variants?: Variants
  
  constructor(id: string = randomUUID(), name: string, description: string, abilities: Ability[], talents: Talents, variants?: Variants) {
    this.id = id
    this.name = name
    this.description = description
    this.abilities = abilities
    this.talents = talents
    this.variants = variants
  }
}