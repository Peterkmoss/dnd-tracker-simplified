import Repository from '../interfaces/SphereRepository'
import Item from '../models/Item'
import Player from '../models/Player'
import repositories from '../repositories'
import Currency from '../types/Currency'
import Movement from '../types/Movement'

export default {
  setName: (name: string, player: Player): Player => {
    player.name = name
    return player
  },

  setAlignment: (alignment: string, player: Player): Player => {
    player.alignment = alignment
    return player
  },

  setSpeed: (speed: number, type: Movement, player: Player): Player => {
    player.speed[type] = speed
    return player
  },

  setBackground: (background: string, player: Player): Player => {
    player.background = background
    return player
  },

  setRace: (race: string, player: Player): Player => {
    player.race = race
    return player
  },

  setArmorClass: (ac: number, player: Player): Player => {
    player.armorClass = ac
    return player
  },

  succeedDeathSave: (player: Player): Player => {
    player.deathSaves = {
      ...player.deathSaves,
      success: player.deathSaves.success ? player.deathSaves.success + 1 : 1,
    }
    return player
  },

  failDeathSave: (player: Player): Player => {
    player.deathSaves = {
      ...player.deathSaves,
      fail: player.deathSaves.fail ? player.deathSaves.fail + 1 : 1,      
    }
    return player
  },
  
  updateCurrency: (currency: Currency, amount: number, player: Player): Player => {
    if (!player.currency[currency]) {
      player.currency[currency] = 0
    }
    player.currency[currency] += amount
    return player
  },
  
  addItemToInventory: (item: Item, player: Player): Player => {
    player.inventory.push(item)
    return player
  },

  removeItemFromInventory: (name: string, amount: number, player: Player): Player => {
    const foundIdx = player.inventory.findIndex((item) => item.name === name)
    if (foundIdx === -1) {
      return player
    }
    
    if (player.inventory[foundIdx].amount > amount) {
      player.inventory[foundIdx].amount -= amount
    } else {
      player.inventory.splice(foundIdx)
    }

    return player
  },

  removeSphere: (name: string, player: Player): Player => {
    player.spheres = player.spheres.filter(it => it.Name === name)
    player.magicTalents++
    return player
  },
    
  useSpellPoints: (amount: number, player: Player): Player => {
    if (amount > player.spellPool.current) {
      throw new Error('player does not have enough SP')
    }
    player.spellPool.current -= amount
    return player
  },
  
  restoreSpellPoints: (amount: number, player: Player): Player => {
    player.spellPool.current = Math.min(amount, player.spellPool.max)
    return player
  },
  
  longRest: (player: Player) => {
    // Todo: hitpoints, hit dice
    player.spellPool.current = player.spellPool.max
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