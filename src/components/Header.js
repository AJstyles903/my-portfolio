'use client'
import data from "@/data/header"
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTerminalFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import Image from "next/image"
const Header = () => {
    const {
        image,
        name,
        jobTitle,
        address,
        experience,
        education
    } = data
    return (
        <div className="flex flex-col items-center gap-5 py-4 md:py-8 md:gap-0 md:p-2 md:flex-row">
            <div className="relative overflow-hidden rounded-full md:w-40 w-52 h-52 md:h-40">
                <Image
                    src={image}
                    fill
                    alt="profile"
                    className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
                />
            </div>
            <div className="flex flex-col justify-center ml-10 capitalize gap-y-4">
                <h1 className="text-5xl font-black">{name}</h1>
                <p className="text-2xl font-medium">{jobTitle}</p>
                <div className="flex flex-wrap items-center text-lg font-normal gap-x-4 md:flex-row">
                    <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt />
                        <span>{address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BsFillTerminalFill />
                        <span>{experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MdSchool />
                        <span>{education}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header