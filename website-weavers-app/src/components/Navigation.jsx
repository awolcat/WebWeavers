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
        <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-xl font-bold">Website Weavers</a>
          
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
              {/* Mobile Menu Button */}
              <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X /> : <Menu />}
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