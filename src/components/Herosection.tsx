"use client"
import React from "react"
import Image from "next/image"

const Herosection = () => {
  const downloadResume = (uri: string, name: string) => {
    const link = document.createElement("a")
    link.download = "name"
    link.href = uri
    link.click()
    link.remove()
    console.log("name", name)
  }
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-5xl sm:truncate mb-4">
              Abiskar dhenga
            </h2>
            <p className="mt-1 text-2xl text-gray-500 ">
              Full Stack Developer / React Native Developer
            </p>
            <p className="mt-1 text-2xl text-gray-500 ">
              Building seamless web experiences .
            </p>
            <div className="mt-5 flex lg:mt-8">
              <span className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => {
                    downloadResume("", "Aabiskarcv.pdf")
                  }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Download My Resume
                </button>
              </span>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 lg:ml-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQG56TXVPV9bXQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708865325937?e=1736380800&v=beta&t=Gy1BLlNLSEREVl9d_ZW6ryzicwP4pblZ2UEkOTa0tdI"
              alt="Abishkar Dhenga"
              width={400}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
