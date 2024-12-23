import React from "react"
import Image from "next/image"
import { projects } from "@/utilis/Project"

const Projects = () => {
  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-12">My Work</h2>
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg shadow-lg bg-[#2a2a32]"
            >
              <div className="p-0">
                <div className="md:flex p-5">
                  <div className="flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={`Project ${project.title}`}
                      width={200}
                      height={100}
                      objectFit="cover"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-3xl font-semibold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="text-sm text-[#c2c2c2] mb-6">
                      <span className="font-bold">Tech Stack:</span>
                      <div className="mt-2 flex flex-wrap gap-3">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        target="_blank"
                        href={project.livedemo}
                        className="text-white px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md"
                      >
                        Live Demo
                      </a>
                      <a
                        target="_blank"
                        href={project.githuburl}
                        className="text-white px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-md"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
