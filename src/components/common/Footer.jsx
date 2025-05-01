import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">DentalCare</h3>
            <p className="text-slate-400 mb-6">
              Modern dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Meet the Team</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Patient Resources</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">General Dentistry</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Cosmetic Dentistry</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Orthodontics</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Pediatric Dentistry</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Dental Implants</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Emergency Care</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-500" />
                <span className="text-slate-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-500" />
                <span className="text-slate-400">info@dentalcare.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500 mt-1" />
                <span className="text-slate-400">
                  123 Dental Street<br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} DentalCare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;