import Converter from '../interfaces/Converter'
import Class from '../models/Class'
import Player from '../models/Player'
import PlayerDao from '../dao/PlayerDao'
import Stat from '../types/Stat'
import ClassDao from '../dao/ClassDao'
import { Die } from '../util/Dice'
import DieDao from '../dao/DieDao'

export default class PlayerConverter implements Converter<Player, PlayerDao> {
  private classConverter: Converter<Class, ClassDao> 
  private dieConverter: Converter<Die, DieDao> 
  
  constructor(classConverter: Converter<Class, ClassDao>, dieConverter: Converter<Die, DieDao>) {
    this.classConverter = classConverter
    this.dieConverter = dieConverter
  }
  
  serialize(player: Player): PlayerDao {
    const levels = []
    for (const [c, l] of player.levels) {
      levels.push({ class: this.classConverter.serialize(c), levels: l })
    }

    const hitDiceCurrent = []
    for (const [d, c] of player.hitDiceCurrent) {
      hitDiceCurrent.push({ die: this.dieConverter.serialize(d), current: c })
    }

    return {
      ...player,
      levels,
      hitDiceCurrent,
    }
  }
  
  deserialize(obj: any): Player {
    const { id, levels, stats, proficiencies, hitDiceCurrent } = obj
    
    const levelMap: Map<Class, number> = new Map()
    for(const { class: c, l } of levels) {
      levelMap.set(this.classConverter.deserialize(c), l)
    }
    
    const statRecord = Object.entries(stats).reduce((acc, [stat, value]) => {
      acc[stat] = (value as any).score
      return acc
    }, {} as Record<Stat, number>)

    const player = new Player(id, levelMap, statRecord, proficiencies)

    const hitDiceCurrentMap: Map<Die, number> = new Map()
    for (const { die, current } of hitDiceCurrent) {
      hitDiceCurrentMap.set(this.dieConverter.deserialize(die), current)
    }
    player.hitDiceCurrent = hitDiceCurrentMap
    
    // Update remaining values
    for (const [k, v] of Object.entries(obj).filter(([k]) => { !['levels', 'stats', 'hitDiceCurrent'].includes(k) })) {
      player[k] = v
    }
    
    return player
  }
}