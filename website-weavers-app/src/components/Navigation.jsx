'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
      { href: '/#services', text: 'OUR SERVICES', active: 'services' },
      { href: '/#why-us', text: 'WHY US', active: 'why-us' },
      { href: '/about', text: 'ABOUT', active: 'about'},
      { href: '/#recent-projects', text: 'PROJECTS', active: 'projects' },
      { href: '/#how-to', text: 'HOW-TO', active: 'how-to' }
    ];
    const activeSegment = useSelectedLayoutSegment()

    const { scrollY } = useScroll()
    const [scrollDown, setScrollDown] = useState("up")

    useMotionValueEvent(scrollY, "change", (current) => {
      // const diff = current - scrollY.getPrevious()
      setScrollDown(current > 0 ? "true" : "false")
    })
    
    return (
        <nav className={`flex flex-col items-center justify-between z-50 shadow-md bg-white/80 
                        dark:bg-gray-900/80 backdrop-blur-md sticky top-0 dark:mt-0 transition-all ease-in-ease-out 5s
                        ${scrollDown === 'true' ? 'py-0' : 'py-4'}`}>
          <div className="container mx-auto px-6 relative">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="text-2xl text-blue-600 dark:text-blue-400 font-bold justify-self-start text-left hover:text-blue-600">
                WEBSITE WEAVERS
              </a>
          
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-gray-900 hover:text-blue-600 dark:hover:text-blue-400 
                                transition-all text-sm font-semibold dark:text-white
                                ${activeSegment === link.active ? 'border-b-4 border-blue-600': ''}`}
                  >
                    {link.text}
                  </Link>
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
                  <button className="relative bg-blue-600 hidden text-white px-6 py-3 rounded-lg items-center lg:flex dark:bg-blue-500">
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
          <div className={`lg:hidden transition-all duration-500 absolute w-full left-0 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <div className="bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-200 shadow-lg rounded-lg mt-2">
              <div className="pb-4 space-y-2">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-6"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;