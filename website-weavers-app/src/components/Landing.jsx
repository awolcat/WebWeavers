import { Mail, Phone, MapPin } from 'lucide-react';

import Navbar from './Navigation';
import Hero from './Hero';
import Carousel from './Carousel';
import WhyUs from './WhyUs';
import RecentProjects from './RecentProjects';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Carousel />     

      {/* Why Choose Us Section */}
      <WhyUs />

      {/* Recent Projects Section */}
      <RecentProjects />

      {/* Contact Form Section */}
      <section id="contact" className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 mb-4 gap-8 justify-items-center	">
          <div className='mx-auto flex flex-col items-center'>
            <h2 className="text-4xl font-bold mb-8 text-center">Tell us about</h2>
            <h2 className="text-4xl font-bold mb-8 text-blue-500 text-center">your project.</h2>
            <p className='w-full md:w-3/6 md:text-center lg:text-left'>Lets figure out how to create an effective application,
            its cost and terms of its development</p>
          </div>
          <div className='w-full md:w-4/6 lg:w-full'>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-left px-0 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-24 lg:justify-items-center	">
        <div>
            <h3 className="font-bold mb-4">WEBSITE WEAVERS</h3>
            <div className="flex items-start gap-2">
              <p>
                Elevate your digital presence with our expert website design and development. 
                We craft bespoke solutions based on client needs.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">ADDRESS:</h3>
            <div className="flex items-start gap-2">
              <MapPin size={20} />
              <p>
                Nairobi, Kenya
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
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
        <div className="mt-8 p-6 text-center text-gray-400 bg-gray-700 w-full text-sm">
          All Rights Reserved © 2024 WEBSITE WEAVERS
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;