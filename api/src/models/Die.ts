export default class Die {
  sides: number
  
  constructor(sides: number) {
    this.sides = sides
  }

  roll(): number {
     return 1 + Math.floor(Math.random() * this.sides)
  }
}