import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Navigation } from 'lucide-react';

import Navbar from './Navigation';
import Hero from './Hero';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Website Development</h3>
              <p className="text-gray-600 mb-4">
                Unlock your online potential with our expert website development services. 
                From personal brands to business websites.
              </p>
              <button className="text-blue-600 flex items-center gap-2">
                Get In Touch
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Systems Development</h3>
              <p className="text-gray-600 mb-4">
                We design and implement custom systems that drive efficiency and growth.
              </p>
              <button className="text-blue-600 flex items-center gap-2">
                Get In Touch
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Website Design</h3>
              <p className="text-gray-600 mb-4">
                Transform your vision into reality with our stunning website design services.
              </p>
              <button className="text-blue-600 flex items-center gap-2">
                Get In Touch
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">WHY CHOOSE US</h2>
          <p className="text-center text-gray-600 italic mb-12">
            "The innovation consists in seeing what everyone has seen and in thinking what no one has thought."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Website Design</h3>
              <p className="text-gray-600">
                We believe in the power of design to tell your brand story, crafting unique visuals 
                that reflect your identity and values
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Showcase Your Brand</h3>
              <p className="text-gray-600">
                We work closely with you to understand your operational challenges and deliver 
                software that addresses them effectively.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Meet Your Business Needs</h3>
              <p className="text-gray-600">
                We combine technical expertise with creative flair to deliver seamless, 
                high-performing websites tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Tell us about your project.</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">ADDRESS:</h3>
            <div className="flex items-start gap-2">
              <MapPin size={20} />
              <p>
                Rr. Reshit Petrela, Kompleksi Usluga, Kati 2,
                Tiranë - Albania, Nipt: L72206043S
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT:</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <p>+355 (0) 694045400</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <p>info@rayonit.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          All Rights Reserved © 2024 WEBSITE WEAVERS
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;