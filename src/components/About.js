import SectionLine from "./SectionLine"
import Heading from "./Heading"
import data from "@/data/about"
const About = () => {
    return (
        <SectionLine>
            <Heading>About</Heading>
            <h6 className="text-lg font-medium md:text-xl">👋 {data.title}</h6>
            <p className="text-base md:text-lg text-zinc-900 dark:text-zinc-300 ">{data.description}</p>
        </SectionLine>
    )
}

export default About