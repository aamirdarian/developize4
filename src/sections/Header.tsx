import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <img 
              src="/Developize.png" 
              alt="Developize" 
              className="h-64 w-auto -ml-2"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <a href="tel:07342601900" className="hover:text-blue-600 transition-colors duration-200">07342601900</a>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={16} />
              <a href="mailto:info@developize.co.uk" className="hover:text-blue-600 transition-colors duration-200">info@developize.co.uk</a>
            </div>
            <div className="flex items-center space-x-1">
              <a 
                href="https://wa.me/447342601900" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-green-600 transition-colors duration-200"
                title="WhatsApp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Contact Icons */}
            <div className="flex items-center space-x-3">
              <a href="tel:07342601900" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Phone size={18} />
              </a>
              <a href="mailto:info@developize.co.uk" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Mail size={18} />
              </a>
              <a 
                href="https://wa.me/447342601900" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;