import { Phone, MapPin } from 'lucide-react';

import Navbar from './Navigation';
import Hero from './Hero';
import Carousel from './Carousel';
import WhyUs from './WhyUs';
import RecentProjects from './RecentProjects';
import ContactForm from './ContactForm';
import Stepper from './Steps';
import Services from './Services';
import productsList from './productsList';

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services products={productsList} />

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
            <h3 className="font-bold mb-4 text-blue-600">WEBSITE WEAVERS</h3>
            <div className="flex items-start gap-2">
              <p>
                Elevate your digital presence with our expert website design and development. 
                We craft bespoke solutions based on client needs.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-blue-600">ADDRESS:</h3>
            <div className="flex items-start gap-2">
              <MapPin size={20} className='text-blue-600'/>
              <p><a href='https://maps.app.goo.gl/VUPW8VKJPm3ohHKNA' target='_blank' rel='origin'>
                  Nairobi, Kenya
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-blue-600">CONTACT</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={20} className='text-blue-600'/>
                <p><a href="tel:+254705112734">+254 705112734</a></p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className='text-blue-600'/>
                <p><a href="tel:+254707033084">+254 707033084</a></p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className='text-blue-600'/>
                <p><a href="tel:+254712697989">+254 712697989</a></p>
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