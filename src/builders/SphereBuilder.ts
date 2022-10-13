import Ability from '../interfaces/Ability'
import Builder from '../interfaces/Builder'
import Talent from '../interfaces/Talent'
import Sphere from '../models/Sphere'
import TalentGroup from '../types/TalentGroup'

export default class SphereBuilder implements Builder<Sphere> {
  private sphere = new Sphere()

  setDescription(description: string): SphereBuilder {
    this.sphere.Description = description
    return this
  }
  
  setAbilities(abilities: Ability[]): SphereBuilder {
    this.sphere.Abilities = abilities
    return this
  }

  addAbility(ability: Ability): SphereBuilder {
    if (!this.sphere.Abilities) {
      this.sphere.Abilities = []
    }
    this.sphere.Abilities.push(ability)
    return this
  }

  setTalents(talents: Record<string, TalentGroup>): SphereBuilder {
    this.sphere.Talents = talents
    return this
  }
  
  addTalentGroup(name: string, intro?: string) {
    if (!this.sphere.Talents) {
      this.sphere.Talents = {}
    }
    if (!this.sphere.Talents[name]) {
      this.sphere.Talents[name] = { intro, list: [] }
    }
    throw new Error(`Group with name: ${name} already exists`)
  }

  addTalent(groupName: string, talent: Talent): SphereBuilder {
    if (!this.sphere.Talents) {
      throw new Error(`No talent groups exist, create one first`)
    }
    if (!this.sphere.Talents[groupName]) {
      throw new Error(`Talent group: ${groupName} does not exist`)
    }
    this.sphere.Talents[groupName].list.push(talent)
    return this
  }
  
  addVariant(name: string, description: string) {
    if (!this.sphere.Variants) {
      this.sphere.Variants = {}
    }
    this.sphere.Variants[name] = description
  }

  build(): Sphere {
    if (!this.sphere.Description) { throw new Error('Description not set') }
    if (!this.sphere.Abilities) { throw new Error('No abilities added') }
    if (!this.sphere.Talents) { throw new Error('No talents added') }

    return this.sphere
  }

}