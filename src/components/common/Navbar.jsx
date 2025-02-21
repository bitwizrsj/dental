import React, { useState } from 'react';
import { Menu, X, Phone, Clock, ChevronDown, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    "Primary Care",
    "Pediatrics",
    "Women's Health",
    "Laboratory Services",
    "Vaccinations"
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <nav className="bg-white shadow-lg">
      {/* Top bar with contact info and social media */}
      <div className="hidden lg:block bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 987654321</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Mon-Fri: 8AM-6PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transform transition-all duration-200 hover:scale-125 hover:text-blue-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            HealthCare Clinic
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <a href='/book-appointment'>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
            </a>
            
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <a href="/" className="block py-2 text-gray-600">
              Home
            </a>
            <button 
              className="flex items-center w-full py-2 text-gray-600"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isServicesOpen && (
              <div className="pl-4">
                {services.map((service) => (
                  <a
                    key={service}
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-gray-600"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
            <a href="/about" className="block py-2 text-gray-600">
              About Us
            </a>
            <a href="/contact" className="block py-2 text-gray-600">
              Contact
            </a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full mt-2">
              Book Appointment
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;