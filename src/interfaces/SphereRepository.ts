import Sphere from '../models/Sphere'
import TalentGroup from '../types/TalentGroup'
import Ability from './Ability'
import Talent from './Talent'

export default interface Repository {
  getSphere(): Sphere
  getStartingSphere(options: Record<string, any>): Sphere

  getAbility(name: string): Ability
  getAbilities(): Ability[]
  
  getTalent(groupName: string, name: string): Talent
  getTalentGroup(name: string): TalentGroup 
  getTalents(): Record<string, TalentGroup> 
}