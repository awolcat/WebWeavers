import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
      { href: '#services', text: 'OUR SERVICES' },
      { href: '#why-us', text: 'WHY US' },
      { href: '#recent-projects', text: 'PROJECTS' },
      { href: '#how-to', text: 'HOW-TO' }
    ];
    
    return (
        <nav className="flex items-center justify-between py-4 z-50 shadow-md bg-white sticky top-0">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-2xl text-blue-600 font-bold justify-self-start text-left hover:text-blue-600">WEBSITE WEAVERS</a>
          
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    // onClick={(e) => scrollToSection(e, link.href)}
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
              <a href="#contact">
                <button className="relative bg-blue-600 hidden text-white px-6 py-3 rounded-lg flex items-center lg:flex">
                <span className="absolute flex h-3 w-3 -top-1 -right-1">
                  <span className="animate-ping absolute inline-flex top-0 right-0 h-full w-full rounded-full bg-slate-50 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                </span>
                  Get In Touch
                </button>
              </a>
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
                    // onClick={(e) => scrollToSection(e, link.href)}
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