import Player from '../models/Player'

export default class PlayerFacade {
  player: any
  
  constructor(player: Player) {
    this.player = player
    const levels = player.levels
    this.player.levels = []
    for (const [c, l] of levels) {
      this.player.levels.push({ class: c, levels: l })
    }

    const hitDiceCurrent = player.hitDiceCurrent
    this.player.hitDiceCurrent = []
    for (const [d, c] of hitDiceCurrent) {
      this.player.hitDiceCurrent.push({ die: d, current: c })
    }
  }
}