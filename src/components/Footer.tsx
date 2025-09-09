import React from 'react';
import { Phone, Instagram, MapPin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'SEO Services Kasaragod',
    'Social Media Marketing',
    'PPC & Google Ads',
    'Website Development',
    'Digital Strategy',
    'Content Marketing'
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Shyamprasad
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Digital Marketing Strategist helping businesses in Kasaragod and Kerala grow their online presence 
              through effective SEO, social media marketing, and digital strategies.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+919497735825"
                className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://instagram.com/_shy_.am"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-violet-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-violet-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">Phone & WhatsApp</p>
                  <a 
                    href="tel:+919497735825" 
                    className="text-white hover:text-violet-400 transition-colors duration-200"
                  >
                    +91 9497735825
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Instagram className="text-violet-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">Instagram</p>
                  <a 
                    href="https://instagram.com/_shy_.am" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-violet-400 transition-colors duration-200"
                  >
                    @_shy_.am
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-violet-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white">Kasaragod, Kerala</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} Shyamprasad - Digital Marketing Strategist in Kasaragod. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-1 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>for businesses in Kerala</span>
            </div>
          </div>
          
          {/* SEO Keywords */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs leading-relaxed">
              Digital Marketing Strategist Kasaragod | SEO Expert Kasaragod | Social Media Marketer Kerala | 
              PPC Specialist Kasaragod | Website Development Kasaragod | Best Digital Marketing Services Kerala
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;