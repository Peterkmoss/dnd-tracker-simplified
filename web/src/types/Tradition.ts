import type Sphere from "./Sphere"
import type Stat from "./Stat"

export default interface Tradition {
  id: string
  name: string
  drawbacks: Record<string, string>
  boons: Record<string, string>
  keyAbility: Stat
  
  spheres: Sphere[]
}