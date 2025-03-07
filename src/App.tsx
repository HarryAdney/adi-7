import React from 'react';
import { ArrowRight, Calendar, Car, Mail, Menu, Phone, Shield, Star, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-xl">
              <Car className="inline-block mr-2" />
              Carler
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-black">Services</a>
              <a href="#about" className="text-gray-700 hover:text-black">About</a>
              <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4 items-end">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-black px-2 text-right"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-black px-2 text-right"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-black px-2 text-right"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Learn to drive
            <br />
            with confidence
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            Professional driving instruction in the UK. Patient, experienced
            instructors helping you become a safe and confident driver.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Book a lesson
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16">Driving Lessons</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Car className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Beginner Lessons</h3>
              <p className="text-gray-600">
                Start your driving journey with comprehensive lessons tailored
                for complete beginners.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Shield className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Test Preparation</h3>
              <p className="text-gray-600">
                Intensive preparation for your practical test, including mock tests
                and maneuver practice.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Calendar className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book lessons at times that suit you, including evenings and
                weekends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                alt="Driving Lesson"
                className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">Expert Instruction</h3>
                  <p>DVSA approved instructors with years of experience</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=800&q=80"
                alt="Student Success"
                className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">High Pass Rate</h3>
                  <p>Excellent first-time pass rate for our students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl mb-8">
                Ready to start your driving journey? Contact us to book your first
                lesson or discuss your requirements.
              </p>
              <div className="space-y-4">
                <a href="mailto:hello@example.com" className="flex items-center text-gray-300 hover:text-white">
                  <Mail className="h-5 w-5 mr-3" />
                  hello@example.com
                </a>
                <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-white">
                  <Phone className="h-5 w-5 mr-3" />
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="text-sm text-gray-400 space-y-2 sm:space-y-0">
              © 2025 Carler. All rights reserved.
              <span className="block sm:inline sm:ml-4">DVSA Approved Driving Instructor</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
