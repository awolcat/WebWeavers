
import Hero from './Hero';
import WhyUs from './WhyUs';
import RecentProjects from './RecentProjects';
import ContactForm from './ContactForm';
import Stepper from './Steps';
import Services from './Services';
import productsList from './productsList';


const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      
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

  
    </div>
  );
};

export default LandingPage;