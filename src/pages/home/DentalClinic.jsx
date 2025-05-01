import React from 'react';

const DentalClinic = () => {
    return (
        <div className="bg-white p-8 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Left Column */}
                    <div className="col-span-1 md:col-span-4 flex flex-col justify-center items-center md:items-start">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center md:text-left">OUR CLINIC</h1>
                        <p className="text-gray-700 text-sm leading-relaxed mb-8 text-center md:text-left">
                            Modern treatments tailored to your unique needs ensure a comfortable, satisfying
                            dental experience.
                        </p>

                        {/* Feature Cards */}
                        <div className="space-y-4 w-full">
                            {/* Innovative Equipment Card */}
                            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <div className="text-teal-500 mt-1">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 font-medium mb-2">Innovative Equipment</h3>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            We use cutting-edge technology for diagnosis and treatment, ensuring a high standard of medical care.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Personalized Approach Card */}
                            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <div className="text-teal-500 mt-1">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 font-medium mb-2">Personalized Approach</h3>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            We develop customized treatment and care plans, fully adapted to the needs of each patient.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Column - Clinic Image */}
                    <div className="col-span-1 md:col-span-5 flex justify-center items-center">
                        <div className="rounded-3xl overflow-hidden w-full h-full max-h-[500px] shadow">
                            <img
                                src="https://img.freepik.com/premium-photo/dental-clinic-interior-with-modern-dentistry-equipment_23-2147879165.jpg?w=740"
                                alt="Modern dental clinic"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-center md:items-start">
                        <div className="mb-8 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Expert Care</h2>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                Our dedicated doctors continuously enhance their expertise to bring you the highest standard of dental services.
                            </p>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                                Meet our team
                            </button>
                        </div>

                        {/* Doctor Image */}
                        <div className="rounded-3xl overflow-hidden w-full h-full max-h-[400px] shadow">
                            <img
                                src="https://img.freepik.com/free-photo/stomatologist-doctor-explaining-proper-dental-hygiene-patient-holding-sample-human-jaw_158595-7678.jpg?t=st=1740076522~exp=1740080122~hmac=26cc1e7868d6e70d6878f2f501a388b77d3bc308602c0739463116a06854c6e9&w=1380"
                                alt="Dental professional"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalClinic;
