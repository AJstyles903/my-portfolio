'use client'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkLight = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className={`fixed top-4 right-4 ${theme === "light" ? "bg-zinc-900" : "bg-zinc-100"} black rounded-full w-12 h-5`}>
            <span className={`cursor-pointer absolute top-[-3px] left-[-3px] flex justify-center items-center w-7 h-7 rounded-full bg-zinc-900 transition-all duration-500 ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`}
            >
                {
                    theme === "dark" ? <MdLightMode className="text-zinc-100" size={20} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}/> : <MdDarkMode className="text-zinc-100" size={20} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
                }
            </span>
        </div >
    )
}

export default DarkLight