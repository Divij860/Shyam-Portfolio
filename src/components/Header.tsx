import React, { useState } from "react";
import { Menu, X, Phone, Instagram,  LinkedinIcon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0026ff] to-black bg-clip-text text-transparent">
              Shyamprasad
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-violet-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919497735825"
              className="flex items-center space-x-2 text-violet-600 hover:text-violet-700 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium"></span>
            </a>
            <a
              href="https://instagram.com/_shy_.am"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-violet-600 hover:text-violet-700 transition-colors"
            >
              <Instagram size={18} />
              <span className="font-medium"></span>
            </a>
            <a
              href="https://www.linkedin.com/in/shyamprasad-digitalmasrketingexpertinkasaragod/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-violet-600 hover:text-violet-700 transition-colors"
            >
              <LinkedinIcon size={18} />
              <span className="font-medium"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-violet-600 transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a
                  href="tel:+919497735825"
                  className="flex items-center space-x-2 text-violet-600 px-2 py-1"
                >
                  <Phone size={18} />
                  <span>9497735825</span>
                </a>
                <a
                  href="https://instagram.com/_shy_.am"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-violet-600 px-2 py-1"
                >
                  <Instagram size={18} />
                  <span>@_shy_.am</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
