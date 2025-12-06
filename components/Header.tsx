import React, { useState } from 'react';
import { Menu, X, FileText, User, Briefcase, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-slate-800 tracking-tight">
              Tharun<span className="text-accent">.dev</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-slate-600 hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-3 text-base font-medium text-slate-600 hover:text-accent hover:bg-slate-50 rounded-md"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};