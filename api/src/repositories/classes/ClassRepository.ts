import ClassBuilder from '../../builders/ClassBuilder'
import Feature from '../../interfaces/Feature'
import Class from '../../models/Class'
import Dice from '../../util/Dice'
import AlterationRepository from '../spheres/AlterationRepository'
import FeatureRepository from './FeatureRepository'

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
      .setFeatures(FeatureRepository.Elementalist())
      .build()
  }
  
  static Incanter(): Class {
    const features: Record<number, Feature[]> = FeatureRepository.Incanter()
    return new ClassBuilder()
      .setName('Incanter')
      .setHitDie(Dice.d6)
      .setSpellPointFunction((level: number) => level)
      .setTalentFunction((level: number) => level)
      .setFeatures(features)
      .setSavingThrows([['Charisma', 'Intelligence'], ['Charisma', 'Wisdom']])
      .setStartingSpheres([])
      .build()
  }
}