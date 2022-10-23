export default class Item {
  name: string
  description: string

  consumable: boolean
  equipable: boolean
  
  constructor(name: string, description: string, consumable = false, equipable = false) {
    this.name = name
    this.description = description

    this.consumable = consumable
    this.equipable = equipable
  }
}