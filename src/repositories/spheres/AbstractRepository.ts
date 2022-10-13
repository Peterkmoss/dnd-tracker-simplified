import Ability from '../../interfaces/Ability'
import Repository from '../../interfaces/Repository'
import Talent from '../../interfaces/Talent'
import Sphere from '../../models/Sphere'
import TalentGroup from '../../types/TalentGroup'

export default abstract class AbstractRepository implements Repository {
  protected sphere: Sphere
  
  getSphere(): Sphere {
    return this.sphere
  }

  getAbility(name: string): Ability {
    return this.sphere.Abilities[name]
  }

  getAbilities(): Ability[] {
    return this.sphere.Abilities
  }

  getTalent(groupName: string, name: string): Talent {
    return this.sphere.Talents[groupName].list.find(it => it.Name === name)
  }

  getTalentGroup(groupName: string): TalentGroup {
    return this.sphere.Talents[groupName]
  }

  getTalents(): Record<string, TalentGroup> {
    return this.sphere.Talents
  }
}