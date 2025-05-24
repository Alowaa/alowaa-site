import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-['Lobster'] text-[#73BBD1]">Alowaa</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium text-gray-800 hover:text-[#FFBF00]">
            Home
          </Link>
          <Link href="/#how-it-works" className="font-medium text-gray-800 hover:text-[#FFBF00]">
            How it works
          </Link>
          <Link href="/#testimonials" className="font-medium text-gray-800 hover:text-[#FFBF00]">
            Testimonials
          </Link>
          <Link href="/contact" className="font-medium text-gray-800 hover:text-[#FFBF00]">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Back to home link */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-[#FFBF00]">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
      </div>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-6">
              Any question? Partnerships suggestions? Contact us here!
            </h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73BBD1] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73BBD1] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73BBD1] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#73BBD1] hover:bg-[#5ba9c0] text-white font-medium py-3 px-6 rounded-full transition duration-300"
              >
                Send
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/placeholder.svg?height=500&width=500&text=Contact+Image"
              alt="Contact illustration"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-['Lobster'] text-[#73BBD1]">Alowaa</h2>
              <p className="text-gray-600 mt-2 font-['Roboto']">Connect. Meet. Belong.</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <a href="https://instagram.com" className="text-gray-600 hover:text-[#FFBF00]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-[#FFBF00]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
              <a href="mailto:contact@alowaa.com" className="text-gray-600 hover:text-[#FFBF00] font-['Roboto']">
                contact@alowaa.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
