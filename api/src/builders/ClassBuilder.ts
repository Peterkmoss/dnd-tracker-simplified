import Builder from '../interfaces/Builder'
import Feature from '../interfaces/Feature'
import Class from '../models/Class'
import Sphere from '../models/Sphere'
import { Die } from '../util/Dice'

export default class ClassBuilder implements Builder<Class> {
  private c: Class = new Class(null)
  
  validate(): void {
    if (!this.c.name) { throw new Error('Name not set') }
    if (!this.c.hitDie) { throw new Error('Hit die not set') }
  }
  
  setName(name: string) {
    this.c.name = name
    return this
  }
  
  setStartingSpheres(spheres: Sphere[]) {
    this.c.startingSpheres = spheres
    return this
  }
  
  setTalentFunction(fun: (level: number) => number) {
    this.c.talentFunction = fun
    return this
  }

  setSpellPointFunction(fun: (level: number) => number) {
    this.c.spellPointFunction = fun
    return this
  }

  setHitDie(die: Die) {
    this.c.hitDie = die
    return this
  }
  
  setFeatures(features: Record<number, Feature[]>) {
    this.c.features = features
    return this
  }
  
  setClassAbilityDie(abilityDie: Record<number, Die>) {
    this.c.classAbilityDie = abilityDie
    return this
  }

  build(): Class {
    this.validate()
    
    return this.c
  }
}