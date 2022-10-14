import Class from '../models/Class'
import Player from '../models/Player'
import Sphere from '../models/Sphere'
import Stat from '../types/Stat'

export default class PlayerFacade {
  hp: number
  hpMax: number

  spMax: number
  sp: number
  
  unspentTalentPoints: number
  
  levels: {class: Class, levels: number}[]

  stats: Record<Stat, { score: number, modifier: number }>
  
  spheres: Sphere[]
  
  constructor(player: Player) {
    this.hp = player.hitPoints
    this.hpMax = player.hitPointsMax

    this.sp = player.spellPoints
    this.spMax = player.spellPointsMax
    
    this.stats = player.stats
    
    this.unspentTalentPoints = player.magicTalents
    
    this.levels = []
    for (const [c, l] of player.levels) {
      this.levels.push({
        class: c,
        levels: l,
      })
    }
    
    this.spheres = player.spheres
  }
}