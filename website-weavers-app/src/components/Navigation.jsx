import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
      { href: '#about', text: 'OUR SERVICES' },
      { href: '#products', text: 'WHY US' },
      { href: '#enquiry', text: 'PROJECTS' },
      { href: '#contact', text: 'TESTIMONIALS' }
    ];
    return (
        <nav className="flex items-center justify-between py-4 z-50 shadow-md bg-white sticky top-0">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-2xl text-blue-600 font-bold">WEBSITE WEAVERS</a>
          
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-blue-600 transition-colors text-sm font-semibold"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
              {/* Mobile Menu Button */}
              <button
                  className="lg:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X /> : <Menu />}
              </button>
              <button className="bg-blue-600 hidden text-white px-6 py-3 rounded-lg flex items-center lg:flex">
                Get In Touch
              </button>
            </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 
                          ${isMenuOpen ? 'max-h-64 opacity-100 bg-white text-blue-600 shadow-md'
                                       :'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="pb-4 space-y-2">
              {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block py-2 hover:text-blue-600 transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;