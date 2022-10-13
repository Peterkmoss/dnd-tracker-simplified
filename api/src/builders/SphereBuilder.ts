import Ability from '../interfaces/Ability'
import Builder from '../interfaces/Builder'
import Sphere from '../models/Sphere'
import TalentGroup from '../types/TalentGroup'

export default class SphereBuilder implements Builder<Sphere> {
  private sphere = new Sphere()

  setName(name: string): SphereBuilder {
    this.sphere.Name = name
    return this
  }

  setDescription(description: string): SphereBuilder {
    this.sphere.Description = description
    return this
  }
  
  setAbilities(abilities: Ability[]): SphereBuilder {
    this.sphere.Abilities = abilities
    return this
  }

  setTalents(talents: Record<string, TalentGroup>): SphereBuilder {
    this.sphere.Talents = talents
    return this
  }

  setVariants(variants: Record<string, string>): SphereBuilder {
    this.sphere.Variants = variants
    return this
  }

  build(): Sphere {
    if (!this.sphere.Name) { throw new Error('Name not set') }
    if (!this.sphere.Description) { throw new Error('Description not set') }
    if (!this.sphere.Abilities) { throw new Error('No abilities added') }
    if (!this.sphere.Talents) { throw new Error('No talents added') }

    return this.sphere
  }

}