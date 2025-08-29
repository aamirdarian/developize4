import React from 'react';
import { Phone, Mail, ExternalLink, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">DEVELOPIZE</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional website development and digital marketing services for UK businesses. 
              Helping businesses establish and grow their online presence with personalized service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:07342601900" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">07342 601900</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@developize.co.uk" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">info@developize.co.uk</a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={16} className="text-blue-400" />
                <a 
                  href="https://wa.me/447342601900" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Website Development</li>
              <li>SEO Optimization</li>
              <li>Google Ads</li>
              <li>Social Media Marketing</li>
              <li>Video Creation</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </div>

        {/* Portfolio Links */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <h4 className="text-lg font-semibold mb-4">Recent Projects</h4>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-sm">
            <a
              href="https://primeplumbingleicester.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <span>Prime Plumbing Leicester</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://jungleclearances.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <span>Jungle Clearances</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://nthconstruction.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <span>NTH Construction</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
          <span>&copy; {currentYear} Developize. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;