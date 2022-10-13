import Sphere from './Sphere'

export default class Class {
  name: string
  
  startingSpheres?: Sphere[] = []
  
  talentFunction: (level: number) => number = () => 0
  spellPointFunction: (level: number) => number = () => 0
  
  constructor(name: string) {
    this.name = name
  }
}