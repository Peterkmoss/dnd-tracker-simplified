import Feature from '../../interfaces/Feature'

export default class FeatureRepository {
  static Elementalist(): Record<number, Feature[]> {
    const level1: Feature[] = [
      {
        name: 'Spherecasting',
        description: 'You can combine spheres and talents to create magical effects. You gain a spell pool and magic talents.',
      },
      {
        name: 'Unarmored Defense',
        description: 'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your key ability modifier.',
      },
      {
        name: 'Weave Energy',
        description: 'At 1st level, you gain the Destruction sphere.',
      },
    ]
    const level2: Feature[] = [
      {
        name: 'Admixture',
        description: 'At 2nd level, you can mix multiple blast types together. When you create a destructive blast, you can spend a bonus action to add a second blast type. If the blast types have different damage types, the blast’s damage is split equally between the two types. If both blast types modify the saving throw allowed by any blast shape, you must choose which one applies. The rider effects of both blast types are applied. The admixture feature is not considered an augment for the purpose of interacting with sphere talents or abilities. You can use this feature twice. You regain expended uses when you finish a short or long rest.',
      },
      {
        name: 'Elemental Path',
        description: 'At 2nd level, you unlock an elemental path of your choice: the Path of the Aspirant, Path of the Doomblade, Path of the Geomancer, Path of the Inspired Kineticist, or the Path of the Primordial, each of which are detailed at the end of the class description. Your choice grants you features at 2nd level and again at 3rd, 6th, 11th, and 17th level.',
      },
    ]
    return {
      1: level1,
      2: level2,
    }
  }
}