'use client';
import '../../index.css';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Users, Target, Workflow, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#191919] overflow-hidden mx-4 rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/90 to-[#191919]/90" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-200 text-lg"
            >
              Welcome to WebWeaversOnline, where we elevate your digital presence with our expert website design and development services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                At WebWeaversOnline, our mission is to transform your vision into reality by creating visually captivating and user-friendly websites that resonate with your audience. We believe in the power of design to tell your brand story and reflect your identity and values.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Users className="w-8 h-8 text-[#0A66C2]" />, text: "Client-Focused" },
                { icon: <Target className="w-8 h-8 text-[#0A66C2]" />, text: "Goal-Oriented" },
                { icon: <Workflow className="w-8 h-8 text-[#0A66C2]" />, text: "Efficient Process" },
                { icon: <Award className="w-8 h-8 text-[#0A66C2]" />, text: "Quality Work" }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg text-center grid grid-cols-2 gap-2 items-center justify-items-center">
                  {item.icon}
                  <p className="mt-2 font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "UI/UX Design",
                content: "Transform your vision into reality with our stunning website design services."
              },
              {
                title: "Digital Presence",
                content: "Get found online with our comprehensive Google setup services."
              },
              {
                title: "Website Development",
                content: "Unlock your online potential with our expert website development services."
              },
              {
                title: "Software Development",
                content: "Revolutionize your business with our cutting-edge software development solutions."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#0A66C2]">{service.title}</h3>
                <p className="text-gray-600">{service.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Showcase Your Brand",
                content: "We work closely with you to understand your operational challenges and deliver software that addresses them effectively."
              },
              {
                title: "Meet Business Needs",
                content: "We combine technical expertise with creative flair to deliver seamless, high-performing websites tailored to your business needs."
              },
              {
                title: "Comprehensive Process",
                content: "Our process begins with a detailed discussion about your business needs and goals, followed by project planning, setup and development, and finally, launch and optimization."
              }
            ].map((item, index) => (
              <div key={index} className="p-8 border border-gray-200 rounded-lg hover:border-[#0A66C2] transition-colors">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our team of skilled professionals is passionate about delivering exceptional results. From UI/UX designers to software developers, we bring together a diverse set of talents to ensure your project is a success.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#191919] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your digital presence?</h2>
          <p className="mb-8">Get in touch with us today to discuss your project.</p>
          <a href="/#contact">
            <button className="bg-[#0A66C2] text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#004182] transition-colors">
              Contact Us
              <ArrowRight size={20} />
            </button>
          </a>
          <div className="mt-12 flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-[#70B5F9]" />
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;