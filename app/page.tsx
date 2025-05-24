import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Users, Calendar, ArrowRight } from "lucide-react"

export default function HomePage() {
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
          <Link href="#how-it-works" className="font-medium text-gray-800 hover:text-[#FFBF00]">
            How it works
          </Link>
          <Link href="#testimonials" className="font-medium text-gray-800 hover:text-[#FFBF00]">
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight mb-6">
            Enjoy life with <span className="text-[#73BBD1]">good people</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-['Roboto']">
            Connect with international people in your new city. Make friends, join spontaneous meetups, and build your
            community abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white rounded-full py-3 px-6 flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5,12.5c0,0.76-0.13,1.48-0.39,2.17c-0.26,0.69-0.63,1.32-1.1,1.87c-0.46,0.56-1.01,1.01-1.64,1.35 c-0.63,0.34-1.32,0.51-2.05,0.51c-0.42,0-0.83-0.06-1.24-0.18c-0.41-0.12-0.79-0.3-1.15-0.54c-0.35-0.24-0.67-0.54-0.96-0.89 c-0.29-0.35-0.52-0.75-0.7-1.2c-0.18,0.45-0.41,0.85-0.7,1.2c-0.29,0.35-0.61,0.65-0.96,0.89c-0.35,0.24-0.74,0.42-1.15,0.54 c-0.41,0.12-0.82,0.18-1.24,0.18c-0.73,0-1.42-0.17-2.05-0.51c-0.63-0.34-1.18-0.79-1.64-1.35c-0.46-0.56-0.83-1.19-1.1-1.87 c-0.26-0.69-0.39-1.41-0.39-2.17c0-0.76,0.13-1.48,0.39-2.17c0.26-0.69,0.63-1.32,1.1-1.87c0.46-0.56,1.01-1.01,1.64-1.35 c0.63-0.34,1.32-0.51,2.05-0.51c0.42,0,0.83,0.06,1.24,0.18c0.41,0.12,0.79,0.3,1.15,0.54c0.35,0.24,0.67,0.54,0.96,0.89 c0.29,0.35,0.52,0.75,0.7,1.2c0.18-0.45,0.41-0.85,0.7-1.2c0.29-0.35,0.61-0.65,0.96-0.89c0.35-0.24,0.74-0.42,1.15-0.54 c0.41-0.12,0.82-0.18,1.24-0.18c0.73,0,1.42,0.17,2.05,0.51c0.63,0.34,1.18,0.79,1.64,1.35c0.46,0.56,0.83,1.19,1.1,1.87 C17.37,11.02,17.5,11.74,17.5,12.5z"></path>
              </svg>
              Download on App Store
            </button>
            <button className="bg-black text-white rounded-full py-3 px-6 flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18,20.83c0.24,0.51,0.56,0.99,0.95,1.43c0.39,0.44,0.84,0.81,1.34,1.09C6.01,23.65,6.56,23.83,7.15,23.95 c0.59,0.12,1.19,0.18,1.8,0.18c0.61,0,1.21-0.06,1.8-0.18c0.59-0.12,1.15-0.3,1.68-0.54c0.53-0.24,1.01-0.54,1.45-0.9 c0.44-0.36,0.82-0.77,1.15-1.24L8.73,15.94L3.18,20.83z"></path>
                <path d="M20.82,10.5c0-0.66-0.1-1.29-0.29-1.91c-0.19-0.61-0.47-1.19-0.83-1.73c-0.36-0.54-0.8-1.02-1.32-1.44 c-0.52-0.41-1.11-0.74-1.77-0.97c-0.66-0.24-1.35-0.36-2.06-0.36c-0.71,0-1.4,0.12-2.06,0.36c-0.66,0.24-1.25,0.56-1.77,0.97 c-0.52,0.41-0.96,0.9-1.32,1.44c-0.36,0.54-0.64,1.12-0.83,1.73c-0.19,0.61-0.29,1.25-0.29,1.91c0,0.66,0.1,1.29,0.29,1.91 c0.19,0.61,0.47,1.19,0.83,1.73c0.36,0.54,0.8,1.02,1.32,1.44c0.52,0.41,1.11,0.74,1.77,0.97c0.66,0.24,1.35,0.36,2.06,0.36 c0.71,0,1.4-0.12,2.06-0.36c0.66-0.24,1.25-0.56,1.77-0.97c0.52-0.41,0.96-0.9,1.32-1.44c0.36-0.54,0.64-1.12,0.83-1.73 C20.72,11.79,20.82,11.16,20.82,10.5z"></path>
              </svg>
              Get it on Google Play
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=250"
              alt="Alowaa App Mockup"
              width={250}
              height={500}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-16">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-[#73BBD1] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-['Poppins'] mb-4">Join a group</h3>
              <p className="text-gray-600 font-['Roboto']">
                Find groups of international people with similar interests in your new city.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-['Poppins'] mb-4">Meet people</h3>
              <p className="text-gray-600 font-['Roboto']">
                Attend spontaneous meetups and events to connect with others face-to-face.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-[#73BBD1] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-['Poppins'] mb-4">Create memories</h3>
              <p className="text-gray-600 font-['Roboto']">
                Build lasting friendships and create unforgettable experiences together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-16">What our users say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
              </div>
              <p className="text-gray-600 mb-6 font-['Roboto']">
                "Alowaa helped me find my community when I moved to Paris for my studies. I've made friends from all
                over the world!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Maria 🇪🇸</p>
                  <p className="text-sm text-gray-500">Student from Spain</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
              </div>
              <p className="text-gray-600 mb-6 font-['Roboto']">
                "Moving to a new country was intimidating, but Alowaa made it easy to connect with other expats and
                locals. Best app ever!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">John 🇺🇸</p>
                  <p className="text-sm text-gray-500">Digital Nomad from USA</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
                <Star className="text-[#FFBF00] w-5 h-5" />
              </div>
              <p className="text-gray-600 mb-6 font-['Roboto']">
                "I've tried many apps, but Alowaa truly understands what international people need. I found my best
                friends here!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Aiko 🇯🇵</p>
                  <p className="text-sm text-gray-500">Engineer from Japan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Map/Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-8">Our global community</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 font-['Roboto']">
            Join thousands of international people creating connections in cities around the world.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Community+${i + 1}`}
                  alt={`Community photo ${i + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center text-[#73BBD1] font-medium hover:text-[#FFBF00]">
              Join our community <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
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
