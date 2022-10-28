import Class from '../models/Class'
import DieDao from './DieDao'

type ClassDao = Partial<Class & { hitDie: any }>

export default ClassDao