import HeroImage from '../assets/images/hero.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start">
              <h1 className="text-4xl font-bold mb-6">Let us Build your Website</h1>
              <p className="text-gray-600 mb-8 text-left">
                Elevate your digital presence with our expert website design and development.
                We craft bespoke solutions based on client's needs.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="bg-gray-200 h-68 rounded-lg">
              {/* Placeholder for hero image */}
              <img src={HeroImage} alt="Hero" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;