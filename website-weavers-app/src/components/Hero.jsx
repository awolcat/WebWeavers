import HeroImage from '../assets/images/hero.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="px-6 py-4 pt-8 m-4 bg-white dark:bg-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-2 items-center">
            <div className="flex flex-col items-start text-left md:col-span-5 lg:col-span-4 fadein-right">
              <h1 className="lg:text-6xl text-5xl mb-1 whitespace-nowrap">Let Us Build</h1>
              <h1 className="lg:text-6xl text-5xl font-bold mb-4 whitespace-nowrap">Your Website</h1>
              <p className="text-gray-600 mb-6 text-left">
                Elevate your digital presence with our expert website design and development.
                We craft bespoke solutions based on client needs.
              </p>
              <a href="#contact">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 group">
                  Get Started
                  <ArrowRight size={20} className='animate-bounce-x group-hover:animate-none'/>
                </button>
              </a>
            </div>
            <div className="md:col-span-7 lg:col-span-8 w-screen scale-150 md:scale-100 md:w-full h-full fadein-left">
              {/* Placeholder for hero image */}
              <img src={HeroImage.src} alt="Hero" className="h-full w-full object-fill rounded-lg " />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;