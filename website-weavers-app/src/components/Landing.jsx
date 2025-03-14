'use client';
import Hero from './Hero';
import WhyUs from './WhyUs';
import RecentProjects from './RecentProjects';
import ContactForm from './ContactForm';
import Stepper from './Steps';
import Services from './Services';
import productsList from './productsList';
import ScrollAnimation from './ScrollAnimation';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section - No animation needed as it's the first thing visible */}
      <Hero />
      
      {/* Services Section */}
      <ScrollAnimation>
        <Services products={productsList} />
      </ScrollAnimation>

      {/* Why Choose Us Section */}
      <ScrollAnimation>
        <WhyUs />
      </ScrollAnimation>

      {/* How It Works Section */}
      <ScrollAnimation>
        <Stepper />
      </ScrollAnimation>

      {/* Recent Projects Section */}
      <ScrollAnimation>
        <RecentProjects />
      </ScrollAnimation>

      {/* Contact Form Section */}
      <ScrollAnimation>
        <ContactForm />
      </ScrollAnimation>
    </div>
  );
};

export default LandingPage;