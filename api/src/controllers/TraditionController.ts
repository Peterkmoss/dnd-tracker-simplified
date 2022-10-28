import TraditionConverter from '../converter/TraditionConverter'
import TraditionRepository from '../repositories/TraditionRepository'
import TraditionService from '../services/TraditionService'

const service = new TraditionService(new TraditionRepository(new TraditionConverter()))

export default {
  async 'new'() {
    try {
      return await service.new()
    } catch (e) {
      console.error(e)
      return null
    }
  },

  async create(tradition: any) {
    try {
      return await service.create(tradition)
    } catch (e: any) {
      console.error(e)
      return null
    }
  },

  async update(id: string, tradition: any) {
    try {
      return await service.update(id, tradition)
    } catch (e: any) {
      console.error(e)
      return false
    }
  },

  async findAll() {
    try {
      return await service.findAll()
    } catch (e: any) {
      console.error(e)
      return []
    }
  },

  async findById(id: string) {
    try {
      return await service.findById(id)
    } catch (e: any) {
      console.error(e)
      return null
    }
  },

  async remove(id: string) {
    try {
      return await service.delete(id)
    } catch (e: any) {
      console.error(e)
      return false
    }
  },
}