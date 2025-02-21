import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactUs = () => {
    // Mock function for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="bg-slate-900 py-16">
            <div className="max-w-6xl mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Have questions about our services? Get in touch with our friendly team today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form and Info */}<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-teal-500/10 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-teal-500" />
                                </div>
                                <h3 className="text-white font-medium">Phone</h3>
                            </div>
                            <p className="text-slate-400">(555) 123-4567</p>
                        </div>

                        {/* Email */}
                        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-teal-500/10 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-teal-500" />
                                </div>
                                <h3 className="text-white font-medium">Email</h3>
                            </div>
                            <p className="text-slate-400">info@dentalclinic.com</p>
                        </div>

                        {/* Hours */}
                        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-teal-500/10 p-3 rounded-full">
                                    <Clock className="w-6 h-6 text-teal-500" />
                                </div>
                                <h3 className="text-white font-medium">Hours</h3>
                            </div>
                            <p className="text-slate-400">Mon-Fri: 9am - 6pm</p>
                            <p className="text-slate-400">Sat: 9am - 2pm</p>
                        </div>

                        {/* Location */}
                        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-teal-500/10 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-teal-500" />
                                </div>
                                <h3 className="text-white font-medium">Location</h3>
                            </div>
                            <p className="text-slate-400">123 Dental Street</p>
                            <p className="text-slate-400">City, State 12345</p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        {/* Contact Information */}


                        {/* Contact Form */}
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
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-slate-800/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-teal-500 text-white py-3 rounded-xl font-medium hover:bg-teal-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}

                </div>
            </div>
        </div>
    );
};

export default ContactUs;