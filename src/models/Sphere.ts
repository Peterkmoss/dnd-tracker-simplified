import Ability from '../interfaces/Ability'
import Talent from '../interfaces/Talent'
import TalentGroup from '../types/TalentGroup'

export default class Sphere {
  Name: string
  Description: string
  Abilities: Ability[]
  Talents: Record<string, TalentGroup>
  Variants?: Record<string, string>

  addTalentGroup(name: string, intro?: string) {
    if (!this.Talents) {
      this.Talents = {}
    }
    if (!this.Talents[name]) {
      this.Talents[name] = { intro, list: [] }
    }
  }
  
  setTalentGroupIntro(name: string, intro: string) {
    this.Talents[name].intro = intro
  }

  addTalent(groupName: string, talent: Talent) {
    if (!this.Talents || !this.Talents[groupName]) {
      this.addTalentGroup(groupName)
    }
    this.Talents[groupName].list.push(talent)
  }
  
  addVariant(name: string, description: string) {
    if (!this.Variants) {
      this.Variants = {}
    }
    this.Variants[name] = description
  }

  addAbility(ability: Ability) {
    if (!this.Abilities) {
      this.Abilities = []
    }
    this.Abilities.push(ability)
  }
}