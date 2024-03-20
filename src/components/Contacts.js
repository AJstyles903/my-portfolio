import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import data from "@/data/contact";
import Link from 'next/link'
import SectionLine from "./SectionLine";
import Heading from "./Heading";
const Contacts = () => {
  return (
    <SectionLine>
      <Heading>
        Contact
      </Heading>
      <div className="flex flex-wrap items-center gap-2">
        {data.map(contact => (
          <Link href={contact.link} target="_blank" className="px-4 py-1 transition-all duration-500 rounded dark:bg-zinc-800 bg-zinc-200 hover:shadow-lg dark:border-white" key={contact.id}>
            <span className="flex items-center justify-center gap-2 text-sm font-medium capitalize md:text-base">
              {contact.name === "email" && <MdEmail size={20} />}
              {contact.name === "github" && <FaGithub size={20} />}
              {contact.name === "twitter" && <FaSquareXTwitter size={20} />}
              {contact.name === "linkedin" && <FaLinkedin className="text-blue-700 dark:text-white" size={20} />}
              {contact.name === "youtube" && <FaYoutube className="text-red-600 dark:text-white" size={20} />}
              {contact.name === "instagram" && <FaInstagram size={20} />}
              {contact.name === "facebook" && <FaFacebookSquare className="text-blue-600 dark:text-white" size={20} />}
              {contact.name === "behance" && <FaBehanceSquare size={20} />}
              {contact.name === "medium" && <FaMedium size={20} />}
              {contact.name === "user" && <FaRegUserCircle size={20} />}
              {contact.label}
            </span>
          </Link>
        ))}
      </div>
    </SectionLine>

  )
}

export default Contacts