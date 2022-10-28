import type Die from "./Die"
import type Feature from "./Feature"
import type Sphere from "./Sphere"
import type Stat from "./Stat"

type Features = Record<number, Feature[]>
type Specializations = Record<string, Record<number, Feature[]>>
type MagicTalents = Record<number, number>
type SpellPoints = Record<number, number>
type ClassAbilityDie = Record<number, Die>

export default interface Class {
  id: string
  name: string
  hitDie: Die
  
  savingThrows: Stat[][]

  features: Features
  
  startingSpheres: Sphere[]
  
  specializations: Specializations

  magicTalents: MagicTalents
  spellPoints: SpellPoints
  
  classAbilityDie?: ClassAbilityDie
}