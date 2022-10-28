import { randomUUID } from 'crypto'

export default class Feature {
  id: string
  name: string
  description: string
  
  constructor(id: string = randomUUID(), name: string, description: string) {
    this.id = id 
    this.name = name
    this.description = description
  }
}