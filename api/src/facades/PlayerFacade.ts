import Class from '../models/Class'
import Player from '../models/Player'
import { Die } from '../util/Dice'

export default class PlayerFacade {
  levels: { class: Class, levels: number }[]
  hitDiceCurrent: { die: Die, current: number }[]
  
  constructor(player: Player) {
    PlayerFacade.apply(this, Object.entries(player))
    const levels = player.levels
    this.levels = []
    for (const [c, l] of levels) {
      this.levels.push({ class: c, levels: l })
    }

    const hitDiceCurrent = player.hitDiceCurrent
    this.hitDiceCurrent = []
    for (const [d, c] of hitDiceCurrent) {
      this.hitDiceCurrent.push({ die: d, current: c })
    }
  }
}