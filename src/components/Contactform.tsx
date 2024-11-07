"use client"
import React, { FormEvent } from "react"

// Define types for the form data
interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData: FormData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    }

    // You can add logic here to handle the form data, e.g., sending it to an API or another action.

    // Reset the form after 2 seconds
    setTimeout(() => {
      form.reset()
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          action="https://getform.io/f/jbwljvya"
          className="flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={10}
            required
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
