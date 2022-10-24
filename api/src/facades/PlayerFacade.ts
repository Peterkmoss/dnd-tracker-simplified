import ClassBuilder from '../builders/ClassBuilder'
import Class from '../models/Class'
import Player from '../models/Player'
import ClassRepository from '../repositories/classes/ClassRepository'

export default abstract class PlayerFacade {
  static serialize(player: Player) {
    const levels = []
    for (const [c, l] of player.levels) {
      levels.push({ class: c, levels: l })
    }

    const hitDiceCurrent = []
    for (const [d, c] of player.hitDiceCurrent) {
      hitDiceCurrent.push({ die: d, current: c })
    }

    return {
      ...player,
      levels,
      hitDiceCurrent,
    }
  }
  
  static deserialize(obj: any): Player {
    const { tradition, levels, stats, proficiencies } = obj
    
    const levelMap: Map<Class, number> = new Map()
    for(const { class: c, l } of levels) {
      const playerClass = ClassRepository[c.name]()
      levelMap.set(playerClass, l)
    }

    const player = new Player(tradition, levelMap, stats, proficiencies)
    
    for (const [k, v] of Object.entries(obj)) {
      player[k] = v
    }
    
    return player
  }
}