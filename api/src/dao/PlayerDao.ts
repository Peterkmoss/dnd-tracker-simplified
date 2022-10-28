import Player from '../models/Player'

type PlayerDao = Partial<Player & { levels: any, hitDiceCurrent: any }> 

export default PlayerDao