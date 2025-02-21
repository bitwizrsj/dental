import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

const BookAppointment = () => {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    "General Check-up",
    "Teeth Cleaning",
    "Teeth Whitening",
    "Dental Implants",
    "Orthodontics",
    "Root Canal",
    "Emergency Care"
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Book an Appointment</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Schedule your visit with our experienced dental team. We'll ensure you receive the best care for your dental needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-8">
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="John"
                      />
                      <User className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Doe"
                      />
                      <User className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full bg-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="(555) 123-4567"
                    />
                    <Phone className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full bg-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="john@example.com"
                    />
                    <Mail className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4">Appointment Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Select Service
                  </label>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full bg-slate-800 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <Calendar className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className="bg-slate-800 hover:bg-slate-700 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 transition-colors"
                      >
                        <Clock className="w-4 h-4" />
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Additional Notes
                  </label>
                  <div className="relative">
                    <textarea
                      rows={4}
                      className="w-full bg-slate-800 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Any specific concerns or requirements..."
                    />
                    <MessageSquare className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-4 rounded-xl font-medium hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
            </form>
          </div>

          {/* Information Panel */}
          <div className="space-y-8">
            {/* What to Expect */}
            <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-8">
              <h3 className="text-white font-semibold text-lg mb-4">What to Expect</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-500">1</span>
                  </div>
                  <p>Confirmation email with appointment details</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-500">2</span>
                  </div>
                  <p>Reminder notification 24 hours before appointment</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-teal-500">3</span>
                  </div>
                  <p>Initial consultation and treatment plan discussion</p>
                </li>
              </ul>
            </div>

            {/* Insurance Info */}
            <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-8">
              <h3 className="text-white font-semibold text-lg mb-4">Insurance Information</h3>
              <p className="text-slate-400 mb-4">
                We accept most major insurance providers. Please bring your insurance card to your appointment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-4">
                  <img src="/api/placeholder/100/40" alt="Insurance Provider" className="w-full h-auto" />
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <img src="/api/placeholder/100/40" alt="Insurance Provider" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;