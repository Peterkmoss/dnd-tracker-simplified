import ClassConverter from '../converter/ClassConverter'
import DieConverter from '../converter/DieConverter'
import PlayerConverter from '../converter/PlayerConverter'
import SphereConverter from '../converter/SphereConverter'
import PlayerRepository from '../repositories/PlayerRepository'
import PlayerService from '../services/PlayerService'

const dieConverter = new DieConverter()
const converter = new PlayerConverter(new ClassConverter(dieConverter), dieConverter, new SphereConverter())
const repo = new PlayerRepository(converter)
const service = new PlayerService(repo, converter)

export default {
  async 'new'() {
    try {
      return await service.new()
    } catch (e) {
      console.error(e)
      return null
    }
  },

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