import Repository from '../interfaces/SphereRepository'
import Player from '../models/Player'
import repositories from '../repositories'

export default {
  updateKAM: (KAM: number, player: Player) => {
    player.updateKAM(KAM)
  },
  
  removeSphere: (name: string, player: Player): Player => {
    player.spheres = player.spheres.filter(it => it.Name === name)
    player.magicTalents++
    return player
  },
    
  useSpellPoints: (amount: number, player: Player): Player => {
    if (amount > player.spellPoints) {
      throw new Error('player does not have enough SP')
    }
    player.spellPoints -= amount
    return player
  },
  
  restoreSpellPoints: (amount: number, player: Player): Player => {
    player.spellPoints = Math.min(amount, player.spellPointsMax)
    return player
  },
  
  longRest: (player: Player) => {
    player.spellPoints = player.spellPointsMax
    return player
  },
  
  gainTalent: (sphereName: string, group: string, talent: string, player: Player): Player => {
    if (player.magicTalents < 1) {
      throw new Error(`player does not have any more talent points`)
    }

    const repo: Repository = repositories[sphereName]
    if (!repo) {
      throw new Error(`sphere with name: ${sphereName} does not exist`)
    }

    const playerSphere = player.spheres.find(it => it.Name === sphereName)
    if (!playerSphere) {
      throw new Error(`player does not have sphere ${sphereName}`)
    }

    playerSphere.addTalent(group, repo.getTalent(group, talent))
    return player
  },
  
  gainSphere: (sphereName: string, player: Player): Player => {
    if (player.magicTalents < 1) {
      throw new Error(`player does not have any more talent points`)
    }
    
    const repo: Repository = repositories[sphereName]
    if (!repo) {
      throw new Error(`sphere with name: ${sphereName} does not exist`)
    }
    
    player.spheres.push(repo.getSphere())
    return player
  }
}