import { randomUUID } from 'crypto'

export default class Item {
  id: string
  name: string
  description: string
  amount: number
  consumable: boolean
  equipable: boolean
  
  constructor(id: string = randomUUID(), name: string, description: string, amount = 1, consumable = false, equipable = false) {
    this.id = id
    this.name = name
    this.description = description
    this.amount = amount
    this.consumable = consumable
    this.equipable = equipable
  }
}