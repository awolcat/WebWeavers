import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
      { href: '/#services', text: 'OUR SERVICES' },
      { href: '/#why-us', text: 'WHY US' },
      { href: '/#recent-projects', text: 'PROJECTS' },
      { href: '/#how-to', text: 'HOW-TO' }
    ];
    
    return (
        <nav className="flex items-center justify-between py-4 z-50 shadow-md bg-white/80 backdrop-blur-md sticky top-4 m-4 rounded-lg">
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

              <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
                <a href="#contact">
                  <button className="relative bg-blue-600 hidden text-white px-6 py-3 rounded-lg items-center lg:flex">
                    <span className="absolute flex h-3 w-3 -top-1 -right-1">
                      <span className="animate-ping absolute inline-flex top-0 right-0 h-full w-full rounded-full bg-slate-50 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                    </span>
                    Get In Touch
                  </button>
                </a>
              </div>
            </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 w-full text-center 
                          ${isMenuOpen ? 'max-h-64 opacity-100 bg-transparent text-slate-600'
                                       :'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="pb-4 space-y-2 bg-transparent">
              {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-2 hover:text-blue-600 transition-colors font-semibold"
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