import Class from '../models/Class'
import AlterationRepository from './spheres/AlterationRepository'

export default class ClassRepository {
  static Elementalist(): Class {
    const c = new Class('Elementalist')
    c.startingSpheres = [new AlterationRepository().getStartingSphere({
      genotype: 'animalistic'
    })]
    c.spellPointFunction = (level: number) => level
    c.talentFunction = (level: number) => Math.floor(level * 0.75)
    return c 
  }
}