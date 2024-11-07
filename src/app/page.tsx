import Aboutmesection from "@/components/Aboutmesection"
import Contactform from "@/components/Contactform"
import Footer from "@/components/Footer"
import Herosection from "@/components/Herosection"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projectcard"
import Skillsection from "@/components/Skillsection"
import SocialLinks from "@/components/socialLinks"
import React from "react"

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Herosection />
        <Projects />
        <Skillsection />
        <Aboutmesection />
        <Contactform />
        <Footer />
        <SocialLinks />
      </main>
    </div>
  )
}

export default page
