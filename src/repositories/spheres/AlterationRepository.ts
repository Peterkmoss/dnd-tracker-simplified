import SphereBuilder from '../../builders/SphereBuilder'
import Ability from '../../interfaces/Ability'
import Sphere from '../../models/Sphere'
import TalentGroup from '../../types/TalentGroup'
import * as _ from '../../util'
import AbstractSphereRepository from './AbstractSphereRepository'

export default class AlterationRepository extends AbstractSphereRepository {
  private name = 'Alteration'
  private description = `You have the ability to change the physical makeup of creatures. When you first gain the Alteration sphere, you gain the shapeshift special ability. In addition, you gain one (genotype) talent that you qualify for.`

  constructor() {
    super()
    const abilities: Ability[] = [
      _.getAbility(this.name, 'shapeshift')
    ]
    const talents: Record<string, TalentGroup> = {
      Genotype: {
        list: [
          _.getTalent(this.name, 'genotype', 'animalistic')
        ]
      }
    }
    this.sphere = new SphereBuilder()
      .setName(this.name)
      .setDescription(this.description)
      .setAbilities(abilities)
      .setTalents(talents)
      .build()
  }
  
  getStartingSphere(options: { genotype: string }): Sphere {
    if (!options.genotype) {
      throw new Error('starting genotype not specified')
    }
    const abilities: Ability[] = [
      _.getAbility(this.name, 'shapeshift')
    ]
    const talents: Record<string, TalentGroup> = { 
      Genotype: {
        list: [
          _.getTalent(this.name, 'genotype', options.genotype)
        ]
      }
    }
    return new SphereBuilder()
      .setName(this.name)
      .setDescription(this.description)
      .setAbilities(abilities)
      .setTalents(talents)
      .build()
  }
}