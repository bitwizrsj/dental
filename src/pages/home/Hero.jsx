import React from 'react';
import { Calendar, Phone, Star, Shield, Activity, ChevronDown } from 'lucide-react';
import heroImg from '../../assets/young-female-patient-visiting-de.png';
import imag from '../../assets/image.png';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-12 lg:px-20 xl:px-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply blur-[120px] opacity-40"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply blur-[120px] opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply blur-[120px] opacity-40"></div>
      </div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="px-4 py-1 bg-black rounded-full text-white text-sm font-medium shadow-lg">
              Trusted by 10,000+ Patients
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            HEALTHY <br /> <span className="text-blue-700">SMILES</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Experience world-class dental care with state-of-the-art technology and expert professionals.
          </p>
          
          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
            <div className="flex flex-col items-center text-gray-700">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-200 text-blue-700 rounded-2xl shadow-md">
                <Star className="w-7 h-7" />
              </div>
              <p className="text-sm font-medium mt-2">5-Star Rated</p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-200 text-blue-700 rounded-2xl shadow-md">
                <Shield className="w-7 h-7" />
              </div>
              <p className="text-sm font-medium mt-2">Expert Care</p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-200 text-blue-700 rounded-2xl shadow-md">
                <Activity className="w-7 h-7" />
              </div>
              <p className="text-sm font-medium mt-2">Modern Tech</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4  font-semibold flex items-center justify-center gap-2 shadow-lg transition-all">
              <Calendar className="w-5 h-5" /> Book Appointment
            </button>
            <button className="flex-1 bg-white shadow-md border border-blue-200 text-blue-600 px-8 py-4  font-semibold flex items-center justify-center gap-2 transition-all hover:bg-blue-50">
              <Phone className="w-5 h-5" /> Call Us Now
            </button>
          </div>
        </div>

        {/* Right Image with Decorative Shapes */}
        <div className="relative w-full lg:w-1/2 " >
          {/* Decorative shapes behind image */}
          <div className="absolute -inset-4 z-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-96 bg-blue-200 "></div>
            <div className="absolute bottom-0 left-0 w-80 h-96 bg-purple-200  "></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-200 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-yellow-200 rotate-45"></div>
          </div>
          
          {/* Image container */}
          <div className="relative z-10 shadow-2xl  overflow-hidden">
            <img src={heroImg} alt="Dentist with patient" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-blue-700 animate-bounce hidden lg:block">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;