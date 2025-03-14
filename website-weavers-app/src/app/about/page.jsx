'use client';
import '../../index.css';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Team from './components/Team';
import Services from './components/Services';
import Contact from './components/Contact';
import WhyUs from './components/Why';
import ScrollAnimation from '../../components/ScrollAnimation';

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white text-left">
      {/* Hero Section */}
      < Hero />
                  
      {/* Our Mission Section */}
      <ScrollAnimation>
        < Mission />
      </ScrollAnimation>
      
      {/* Our Services Section */}
      <ScrollAnimation>
        < Services />
      </ScrollAnimation>
      

      {/* Meet The Team Section */}
      <ScrollAnimation>
        < Team />
      </ScrollAnimation>
      
      <ScrollAnimation>
        <WhyUs/>
      </ScrollAnimation>
      
      {/* Contact Section */}
      <ScrollAnimation>
        <Contact/>
      </ScrollAnimation>
    </div>
  );
};

export default AboutUs;