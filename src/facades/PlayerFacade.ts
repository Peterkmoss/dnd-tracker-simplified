import Player from '../models/Player'
import Sphere from '../models/Sphere'

export default class PlayerFacade {
  maxSP: number
  SP: number
  
  unspentTalentPoints: number
  
  levels: Record<string, number>
  
  spheres: Sphere[]
  
  constructor(player: Player) {
    this.SP = player.spellPoints
    this.maxSP = player.spellPointsMax
    
    this.unspentTalentPoints = player.magicTalents
    
    this.levels = {}
    for (const [c, l] of player.levels) {
      this.levels[c.name] = l
    }
    
    this.spheres = player.spheres
  }
}