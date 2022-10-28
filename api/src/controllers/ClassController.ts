import ClassConverter from '../converter/ClassConverter'
import DieConverter from '../converter/DieConverter'
import ClassRepository from '../repositories/ClassRepository'
import ClassService from '../services/ClassService'

const converter = new ClassConverter(new DieConverter())
const repo = new ClassRepository(converter)
const service = new ClassService(repo)

export default {
  async create(player: any) {
    try {
      return await service.create(player)
    } catch (e: any) {
      console.error(e)
      return null
    }
  },

  async update(id: string, player: any) {
    try {
      return await service.update(id, player)
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

  async findByName(name: string) {
    try {
      return await service.findByName(name)
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