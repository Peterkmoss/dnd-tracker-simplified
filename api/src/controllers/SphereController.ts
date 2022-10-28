import SphereConverter from '../converter/SphereConverter'
import SphereRepository from '../repositories/SphereRepository'
import SphereService from '../services/SphereService'

const converter = new SphereConverter()
const repo = new SphereRepository(converter)
const service = new SphereService(repo, converter)

export default {
  async create(sphere: any) {
    try {
      return await service.create(sphere)
    } catch (e: any) {
      console.error(e)
      return null
    }
  },

  async update(id: string, sphere: any) {
    try {
      return await service.update(id, sphere)
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