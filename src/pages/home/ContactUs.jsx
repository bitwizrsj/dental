import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Have questions about our services? Get in touch with our friendly team today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-teal-100 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-slate-900 font-medium">Phone</h3>
                            </div>
                            <p className="text-gray-600">(555) 123-4567</p>
                        </div>

                        {/* Email */}
                        <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-teal-100 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-slate-900 font-medium">Email</h3>
                            </div>
                            <p className="text-gray-600">info@dentalclinic.com</p>
                        </div>

                        {/* Hours */}
                        <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-teal-100 p-3 rounded-full">
                                    <Clock className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-slate-900 font-medium">Hours</h3>
                            </div>
                            <p className="text-gray-600">Mon-Fri: 9am - 6pm</p>
                            <p className="text-gray-600">Sat: 9am - 2pm</p>
                        </div>

                        {/* Location */}
                        <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-teal-100 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-slate-900 font-medium">Location</h3>
                            </div>
                            <p className="text-gray-600">123 Dental Street</p>
                            <p className="text-gray-600">City, State 12345</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-100 rounded-xl px-4 py-3 text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-100 rounded-xl px-4 py-3 text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-100 rounded-xl px-4 py-3 text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-gray-100 rounded-xl px-4 py-3 text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-teal-600 text-white py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
