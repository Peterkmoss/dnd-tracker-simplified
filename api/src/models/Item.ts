export default class Item {
  name: string
  description: string
  
  amount: number

  consumable: boolean
  equipable: boolean
  
  constructor(name: string, description: string, amount = 1, consumable = false, equipable = false) {
    this.name = name
    this.description = description
    
    this.amount = amount

    this.consumable = consumable
    this.equipable = equipable
  }
}