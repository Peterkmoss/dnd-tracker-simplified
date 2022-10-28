import type Class from "./Class"
import type Currency from "./Currency"
import type Die from "./Die"
import type Item from "./Item"
import type Movement from "./Movement"
import type Proficiencies from "./Proficiencies"
import type Sphere from "./Sphere"
import type Stat from "./Stat"
import type Tradition from "./Tradition"

export default interface Player {
  id: string
  name: string
  alignment: string
  speed: { [key in Movement]?: number }
  totalLevel: number
  proficiencyBonus: number
  background: string
  race: string
  armorClass: number
  deathSaves: {
    success?: number
    fail?: number
  }
  proficiencies: Proficiencies
  languages: string[]
  currency: { [key in Currency]?: number }
  inventory: Item[]
  tradition?: Tradition
  backstory: string
  allies: Record<string, string>
  notes: string
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
  hitDiceCurrent: { die: Die, current: number }[]
  spellSave: number
  spellPool: {
    current: number
    max: number
  }
  classSpellPoints: number
  magicTalents: number
  levels: { class: Class, level: number }[]
  spheres: Sphere[]
  keyAbilityModifier: number
  stats: Record<Stat, { score: number, modifier: number }>
}