import { Mail, Phone, MapPin } from 'lucide-react';

import Navbar from './Navigation';
import Hero from './Hero';
import Carousel from './Carousel';
import WhyUs from './WhyUs';
import RecentProjects from './RecentProjects';
import ContactForm from './ContactForm';
import Stepper from './Steps';

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

      {/* How It Works Section */}
      <Stepper />

      {/* Recent Projects Section */}
      <RecentProjects />

      {/* Contact Form Section */}
      <ContactForm />

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