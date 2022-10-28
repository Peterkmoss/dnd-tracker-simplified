import ClassDao from '../dao/ClassDao'
import DieDao from '../dao/DieDao'
import Converter from '../interfaces/Converter'
import Class from '../models/Class'
import Die from '../models/Die'

export default class ClassConverter implements Converter<Class, ClassDao> {
  private hitDieConverter: Converter<Die, DieDao>

  constructor(converter: Converter<Die, DieDao>) {
    this.hitDieConverter = converter
  }

  serialize(obj: Class): ClassDao {
    return {
      ...obj,
      hitDie: this.hitDieConverter.serialize(obj.hitDie)
    }
  }
  deserialize(obj: any): Class {
    const { id, name, hitDie, savingThrows, features, startingSpheres, specializations, magicTalents, spellPoints, classAbilityDie  } = obj
    return new Class(id, name, hitDie, savingThrows, magicTalents, spellPoints, features, startingSpheres, specializations, classAbilityDie)
  }
}