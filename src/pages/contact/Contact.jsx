// ContactInfo.jsx
import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Emergency: (555) 999-8888"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@dentalclinic.com", "appointments@dentalclinic.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9am - 6pm", "Sat: 9am - 2pm", "Sun: Closed"]
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Dental Street", "City, State 12345"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactDetails.map((item, index) => (
        <div key={index} className="bg-slate-800/50 backdrop-blur rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-teal-500/10 p-3 rounded-full">
              <item.icon className="w-6 h-6 text-teal-500" />
            </div>
            <h3 className="text-white font-medium">{item.title}</h3>
          </div>
          {item.details.map((detail, idx) => (
            <p key={idx} className="text-slate-400">{detail}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

// ContactForm.jsx
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full bg-slate-800/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full bg-slate-800/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full bg-slate-800/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="john@example.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          className="w-full bg-slate-800/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Preferred Appointment Time
        </label>
        <select className="w-full bg-slate-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
          <option value="">Select a time</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full bg-slate-800/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="How can we help you?"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-500 text-white py-3 rounded-xl font-medium hover:bg-teal-600 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

// Map.jsx
const Map = () => {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645647702177!5m2!1sen!2s"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

// Contact.jsx
const Contact = () => {
  return (
    <div className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have questions about our services? Get in touch with our friendly team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info and Form */}
          <div className="space-y-8">
            <ContactInfo />
            <ContactForm />
          </div>

          {/* Right Column - Map and Emergency Info */}
          <div className="space-y-8">
            <Map />
            
            {/* Emergency Contact Box */}
            <div className="bg-red-500/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-red-500 mb-3">
                Dental Emergency?
              </h3>
              <p className="text-slate-400 mb-4">
                We offer 24/7 emergency dental services. Call our emergency hotline immediately:
              </p>
              <a 
                href="tel:(555)999-8888" 
                className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (555) 999-8888
              </a>
            </div>

            {/* Office Hours Box */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Extended Office Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;