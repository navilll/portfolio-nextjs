import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiGithubBadge,
  DiVisualstudio,
} from "react-icons/di"

import {
    RiTailwindCssFill,
    RiNextjsFill,
} from "react-icons/ri";

import { 
    SiKotlin,
    SiLaravel,
    SiPhp,
    SiMysql,
    SiVercel,
    SiPostman,
} from "react-icons/si";

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-500' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'PHP', icon: <SiPhp className='text-purple-700' /> },
        { name: 'Laravel', icon: <SiLaravel className='text-red-600' /> },
        { name: 'Next.js', icon: <RiNextjsFill className='text-white' /> },
        { name: 'Kotlin', icon: <SiKotlin className='text-purple-700' /> },
        { name: 'MySQL', icon: <SiMysql className='text-blue-800' /> },
      ],
    },
    {
      category: 'Others',
      technologies: [
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
        { name: 'Postman', icon: <SiPostman className='text-orange-600' /> },
        { name: 'VS Code', icon: <DiVisualstudio className='text-purple-900' /> },
        { name: 'Vercel', icon: <SiVercel className='text-black' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="py-2 max-w-[1200px] mx-auto text-gray-200 m-5" id="skills">
        <div className="mx-auto px-4 md:px-9">
            <div className=" flex items-center justify-between gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl lg:text-3xl text-white">
                        My <span>Skills</span>
                    </h2>
                    <p className="text-gray-500">
                        I worked on various Backend and Fullstack Projects.
                    </p>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 m-5">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-600 p-10 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-6">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-4xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills