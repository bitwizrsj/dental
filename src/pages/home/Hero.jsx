import React, { useState } from 'react';
import { Calendar, Phone, Star, Clock, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import img1 from '../../assets/hero1.png'; // Adjust the path as necessary

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white">
      

      {/* Hero Section */}
      <section className="flex pt-16 md:pt-0 md:h-screen items-center pb-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Trusted by 15,000+ Happy Patients
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Your Smile, <br />
                <span className="text-blue-600">Our Passion</span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Experience exceptional dental care in a comfortable environment with our team of expert professionals using the latest technology.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Gentle Care</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Modern Technology</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Expert Dentists</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Affordable Plans</span>
                </div>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto lg:mx-0">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all w-full sm:w-auto">
                  <Calendar className="w-5 h-5" /> Book Online
                </button>
                <button className="bg-white border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
                  <Phone className="w-5 h-5" /> Call Us
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative">
              {/* Background decorative elements */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100 rounded-full opacity-70"></div>
              <div className="absolute -left-10 bottom-10 w-40 h-40 bg-green-100 rounded-full opacity-70"></div>
              
              {/* Main image with card overlays */}
              <div className="relative rounded-2xl overflow-hidden ">
                <img 
                  src={img1}  
                  alt="Smiling patient at dentist" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay cards */}
                {/* <div className="absolute -left-6 top-10 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Star className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">98% Satisfaction</h3>
                      <p className="text-sm text-gray-600">Based on patient reviews</p>
                    </div>
                  </div>
                </div> */}
                
                {/* <div className="absolute -right-6 bottom-10 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">Same-Day Appointments</h3>
                      <p className="text-sm text-gray-600">Available for emergencies</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Hero;