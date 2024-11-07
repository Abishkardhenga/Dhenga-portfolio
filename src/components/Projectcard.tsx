import React from "react"
import Image from "next/image"

const Projects = () => {
  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-12">My Work</h2>
        <div className="space-y-12">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="overflow-hidden rounded-lg shadow-lg bg-[#2a2a32]"
            >
              <div className="p-0">
                <div className="md:flex">
                  <div className="">
                    <Image
                      src="https://images.pexels.com/photos/27659136/pexels-photo-27659136/free-photo-of-a-scooter-parked-in-front-of-a-building-with-a-poster-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt={`Project ${project}`}
                      width={200}
                      height={100}
                      objectFit="cover"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-3xl font-semibold text-white mb-4">
                      Project {project} - Pixar Remake
                    </h3>
                    <p className="text-lg text-gray-400 mb-4">
                      The Pixar Website Remake is a recreation of the iconic
                      Pixar website, aiming to capture the essence of the
                      original while offering an interactive experience.
                    </p>
                    <p className="text-sm text-[#c2c2c2] mb-6">
                      <span className="font-bold">Tech Stack:</span> React,
                      Next.js, Tailwind CSS
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-white px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md"
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
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
