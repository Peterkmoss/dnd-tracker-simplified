export class Die {
  sides: number
  
  constructor(sides: number) {
    this.sides = sides
  }

  roll(): number {
     return 1 + Math.floor(Math.random() * this.sides)
  }
}

export default {
  d4: new Die(4),
  d6: new Die(6),
  d8: new Die(8),
  d10: new Die(10),
  d12: new Die(12),
  d20: new Die(20),
}