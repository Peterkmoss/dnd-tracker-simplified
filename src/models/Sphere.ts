import Ability from '../interfaces/Ability'
import TalentGroup from '../types/TalentGroup'

export default class Sphere {
  Description: string
  Abilities: Ability[]
  Talents: Record<string, TalentGroup>
  Variants?: Record<string, string>
}