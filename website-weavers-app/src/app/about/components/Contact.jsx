import { MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your digital presence?</h2>
          <p className="mb-8">Get in touch with us today to discuss your project.</p>
          <a href="/#contact">
            <button className="bg-white text-black px-8 py-3 rounded-none flex items-center gap-2 mx-auto hover:bg-gray-200 transition-colors">
              Contact Us
              <ArrowRight size={20} />
            </button>
          </a>
          <div className="mt-12 flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-white" />
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;