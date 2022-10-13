import SphereBuilder from '../../builders/SphereBuilder'
import Ability from '../../interfaces/Ability'
import TalentGroup from '../../types/TalentGroup'
import * as _ from '../../util'
import AbstractRepository from './AbstractRepository'

export default class AlterationRepository extends AbstractRepository {
  constructor() {
    super()
    const sphereName = 'alteration'
    const description = `You have the ability to change the physical makeup of creatures. When you first gain the Alteration sphere, you gain the shapeshift special ability. In addition, you gain one (genotype) talent that you qualify for.`
    const abilities: Ability[] = [
      _.getAbility(sphereName, 'shapeshift')
    ]
    const talents: Record<string, TalentGroup> = {
      Genotype: {
        list: [
          _.getTalent(sphereName, 'genotype', 'animalistic')
        ]
      }
    }
    this.sphere = new SphereBuilder()
      .setAbilities(abilities)
      .setTalents(talents)
      .setDescription(description)
      .build()
  }
}