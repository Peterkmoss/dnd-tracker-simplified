import * as fs from 'fs'
import Ability from '../types/Ability'
import Talent from '../interfaces/Talent'

export function getAbility(sphere: string, name: string): Ability {
  const uri = `./text/spheres/${sphere}/abilities/${name}`
  const ability: Ability = JSON.parse(fs.readFileSync(`${uri}.json`, { encoding: 'utf-8', flag: 'r' }))
  ability.Description = fs.readFileSync(`${uri}.html`, { encoding: 'utf-8', flag: 'r' })
  return ability
}

export function getTalent(sphere: string, groupName: string, name: string): Talent {
  const uri = `./text/spheres/${sphere}/talents/${groupName}/${name}`
  const talent: Talent = JSON.parse(fs.readFileSync(`${uri}.json`, { encoding: 'utf-8', flag: 'r' }))
  talent.Description = fs.readFileSync(`${uri}.html`, { encoding: 'utf-8', flag: 'r' })
  return talent
}