import type Skill from "./Skill"

type Proficiencies = { [key in Skill]?: boolean }

export default Proficiencies