import ClassBuilder from '../../builders/ClassBuilder'
import Class from '../../models/Class'
import Dice from '../../util/Dice'
import AlterationRepository from '../spheres/AlterationRepository'

export default class ClassRepository {
  static Elementalist(): Class {
    return new ClassBuilder()
      .setName('Elementalist')
      .setSpellPointFunction((level: number) => level)
      .setTalentFunction((level: number) => Math.floor(level * 0.75))
      .setHitDie(Dice.d8)
      .setStartingSpheres([
        new AlterationRepository().getStartingSphere({ genotype: 'animalistic' }),
      ])
      .build()
  }
}