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
  
  static Incanter(): Record<number, Feature[]> {
    const level1: Feature[] = [
      {
        name: 'Spherecasting',
        description: 'You can combine spheres and talents to create magical effects. You gain a spell pool and magic talents.',
      },
      {
        name: 'Spell Pool',
        description: 'You gain a small reservoir of energy that you can call on to create truly wondrous effects, called a spell pool. This pool contains a number of spell points equal to your key ability modifier (minimum 1). You gain additional spell points equal to your incanter level. This pool replenishes after a long rest. (Note: if multiclassing, spell points from your key ability modifier are only gained once.)'
      },
      {
        name: 'Magic Talents',
        description: 'You gain a magic talent every level, according to Table: Incanter.'
      },
      {
        name: 'Magical Potency',
        description: 'At 1st level you have learned to regain some of your magical energy through meditation, study, or some other fashion that reflects your style of magic. Once per day when you finish a short rest, you can regain spell points. You can recover a total number of spell points equal to 2 + half your incanter level (rounded up).'
      },
    ]
    const level2: Feature[] = [
      {
        name: 'Magic Specialization',
        description: 'At 2nd level, you can choose a magic specialization, which represents the style of magic you favor. You gain abilities related to that sphere at 2nd, 6th, 10th, and 14th levels.'
      },
    ]
    const level4: Feature[] = [
      {
        name: 'Ability Score Improvement',
        description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
      },
    ]
    const level5: Feature[] = [
      {
        name: 'Arcane Protection',
        description: 'Beginning at 5th level, you can choose to sacrifice spell points instead of hit points when taking damage. This is not considered a magic sphere ability for the purpose of how many spell points you can spend on an individual effect; you can sacrifice more spell points than your proficiency bonus when using this ability.'
      },
    ]
    const level8: Feature[] = [
      {
        name: 'Ability Score Improvement',
        description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
      },
    ]
    const level12: Feature[] = [
      {
        name: 'Ability Score Improvement',
        description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
      },
    ]
    const level16: Feature[] = [
      {
        name: 'Ability Score Improvement',
        description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
      },
    ]
    const level18: Feature[] = [
      {
        name: 'Magical Flexibility',
        description: 'At 18th level, your mastery over your areas of magic is such that you know how to improvise abilities whenever you need them. You can grant yourself an additional talent from a magic sphere that you possess as an action. You retain knowledge of this talent for 1 minute or until you use this ability again, whichever comes first. You can use this ability a number of times equal to your key ability modifier. You regain expended uses when you finish a short or long rest.'
      },
    ]
    const level19: Feature[] = [
      {
        name: 'Ability Score Improvement',
        description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
      },
    ]
    const level20: Feature[] = [
      {
        name: 'Master of Magic',
        description: 'At 20th level, whenever you spend 3 or more spell points to use a magical effect, decrease that spell point cost by 1. This does not reduce the effective spell level of the magical effect for the purposes of counterspell, dispel magic, and other effects or abilities.'
      },
    ]
    return {
      1: level1,
      2: level2,
      4: level4,
      5: level5,
      8: level8,
      12: level12,
      16: level16,
      18: level18,
      19: level19,
      20: level20,
    }
  }
}