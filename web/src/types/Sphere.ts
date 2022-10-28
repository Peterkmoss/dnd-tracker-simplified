import type Ability from "./Ability"
import type Talent from "./Talent"

type Talents = Record<string, {
  intro?: string
  list: Talent[]
}>

type Variants = Record<string, string>

export default interface Sphere {
  id: string
  name: string
  description: string
  abilities: Ability[]
  talents: Talents
  variants?: Variants
}