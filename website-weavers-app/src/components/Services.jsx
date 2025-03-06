import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Services = ({ products }) => {
  const [selectedService, setSelectedService] = useState(products[0]);

  // Service images mapping (you'll need to add your actual image paths)
  const serviceImages = {
    'UI/UX Design': '/images/uiux.webp',
    'Digital Presence': '/images/digitalpresence.webp',
    'Website Development': '/images/web.webp',
    'Software Development': '/images/webdev.svg',
  };

  // Icon mapping (you can customize these or use your actual icons)
  const serviceIcons = {
    'UI/UX Design': '🎨',
    'Digital Presence': '🌐',
    'Website Development': '💻',
    'Software Development': '⚙️',
  };

  return (
    <section id="services" className="py-16 bg-[#191919] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#70B5F9]">🔧</span>
          <span className="text-[#70B5F9]">Services</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-center mb-12">
          <h2 className="text-5xl font-bold text-left">Our Services.</h2>
          <div className="md:justify-self-end">
            <button disabled className="bg-[#0A66C2] text-white px-6 py-3 rounded-full cursor-default transition-colors flex items-center gap-2">
              End to End Services
            </button>
          </div>
        </div>

        <p className="text-gray-400 text-left max-w-2xl mb-12">
          Empowering businesses through innovative digital solutions. We specialize in creating impactful websites, intuitive user experiences, and powerful software solutions.
        </p>

        <div className="flex gap-4 mb-12 flex-wrap">
          {products.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`px-6 py-3 rounded-full transition-colors flex items-center gap-2 ${
                selectedService.id === service.id
                  ? 'bg-[#0A66C2] text-white'
                  : 'bg-[#242424] hover:bg-[#2D2D2D] text-white'
              }`}
            >
              <span>{serviceIcons[service.title]}</span>
              {service.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#242424] p-8 rounded-3xl text-left"
            >
              <div className="mb-6">
                <span className="text-[#70B5F9] text-2xl">
                  {serviceIcons[selectedService.title]}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{selectedService.title}</h3>
              <p className="text-gray-400 mb-6">
                {selectedService.content}
              </p>
              <a href="#contact" className="bg-[#0A66C2] text-white px-6 py-3 rounded-full hover:bg-[#004182] transition-colors flex items-center gap-2 w-fit">
                Let's Chat
                <span>🎧</span>
              </a>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative h-[400px]"
            >
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
