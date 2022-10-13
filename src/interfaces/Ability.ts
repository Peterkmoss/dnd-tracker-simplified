import Stat from '../types/Stat'

export default interface Ability {
  'Casting Time': string
  Range: string
  Duration: string
  Target?: string
  Area?: string
  'Saving Throw'?: Stat | 'varies'
  Cost: number | number[]
  Description: string
}