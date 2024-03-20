import Image from "next/image";
const SkillBox = ({ skill}) => {
    return (
        <div className="flex items-center justify-center gap-2 px-4 py-1 transition-all duration-500 rounded cursor-default bg-zinc-200 dark:bg-zinc-800 hover:shadow-white">
            <div className={`relative w-5 h-5 ${skill.name === "next" && "bg-white rounded-full"}`}>
                <Image fill src={skill.image} alt={skill.name} className="object-cover w-full h-full" />
            </div>
            <span className="text-sm font-medium capitalize md:text-base">{skill.name}</span>
        </div>
    )
}

export default SkillBox