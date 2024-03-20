import SectionLine from "./SectionLine"
import Heading from "./Heading"
import data from "@/data/skills"
import SkillBox from "./SkillBox"

const Skills = () => {
    return (
        <SectionLine>
            <Heading>
                Skills
            </Heading>
            <div className="flex flex-wrap gap-2">
                {
                    data.map(skill => (
                        <SkillBox skill={skill} key={skill.id} />
                    ))
                }
            </div>
        </SectionLine >
    )
}

export default Skills