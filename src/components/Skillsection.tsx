import React from "react"
import { FaReact, FaCss3Alt, FaHtml5, FaFigma, FaNodeJs } from "react-icons/fa"
import { IoLogoDocker } from "react-icons/io5"
import {
  SiMongodb,
  SiGraphql,
  SiExpress,
  SiReact,
  SiTypescript,
  SiJavascript,
} from "react-icons/si"

const skills = [
  { name: "React", icon: <FaReact size={50} className="text-blue-400" /> },
  {
    name: "React Native",
    icon: <SiReact size={50} className="text-blue-500" />,
  },
  { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-600" /> },
  { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" /> },
  {
    name: "Javascript",
    icon: <SiJavascript size={50} className="text-yellow-500" />,
  },
  { name: "Figma", icon: <FaFigma size={50} className="text-purple-600" /> },
  { name: "GraphQL", icon: <SiGraphql size={50} className="text-pink-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-500" /> },
  { name: "Express", icon: <SiExpress size={50} className="text-gray-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
  {
    name: "Docker",
    icon: <IoLogoDocker size={50} className="text-blue-600" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript size={50} className="text-blue-500" />,
  },
]

const Skillsection = () => {
  return (
    <section id="skills" className="py-20 bg-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black mb-8">My Skills</h2>
        <p className="text-black mb-12">
          Here are some of the technologies & tools I have worked with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#2a2a32] p-6 rounded-lg shadow-lg"
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skillsection
