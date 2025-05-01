import React from 'react';

const DentalServices = () => {
  return (
    <div className="bg-white p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Intro Card */}
          <div className="relative overflow-hidden md:col-span-2 aspect-[2/1] bg-slate-100 rounded-2xl p-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">SERVICES</h1>
            <p className="text-slate-700 max-w-lg">
              High-quality dental care for you and your family: our expert team provides a wide
              range of services, ensuring comfort and personalized treatment.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Meet our team
            </button>
          </div>

          {/* Dental Implants Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square">
            <img
              src="https://img.freepik.com/free-photo/young-man-with-toothy-smile-demonstrating-his-dental-implant_259150-57670.jpg?t=st=1740075331~exp=1740078931~hmac=7763efd1101d0cb35b633f8cd963bf56d15ac297df88a477d01e288dc3e8bd16&w=1380"
              alt="Dental implant"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/80 to-transparent">
              <h3 className="text-slate-900 text-xl font-semibold">Dental Implants</h3>
            </div>
            <button className="absolute top-4 right-4 p-2 bg-white/70 rounded-full shadow">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Orthodontics Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square">
            <img
              src="https://img.freepik.com/free-photo/smiling-young-woman-with-braces-teeth_651396-2564.jpg?t=st=1740075414~exp=1740079014~hmac=91602614e14c274871b9ae02b54966da72a072879f0f72de4b34698b1f76ab46&w=1380"
              alt="Orthodontics"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/80 to-transparent">
              <h3 className="text-slate-900 text-xl font-semibold">Orthodontics</h3>
            </div>
            <button className="absolute top-4 right-4 p-2 bg-white/70 rounded-full shadow">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dental Cleaning Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square">
            <img
              src="https://img.freepik.com/free-photo/mid-adult-patient-receiving-dental-treatment-with-tools-from-female-dentist-clinic_662251-2562.jpg?t=st=1740075473~exp=1740079073~hmac=eeaa63274d856be8e935182bad2286109ec72f15d0e63375897156a14ee51efa&w=1380"
              alt="Dental cleaning procedure"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/80 to-transparent">
              <h3 className="text-slate-900 text-xl font-semibold">Dental Cleaning</h3>
            </div>
            <button className="absolute top-4 right-4 p-2 bg-white/70 rounded-full shadow">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Inspirational Message */}
          <div className="flex items-center justify-center rounded-2xl bg-blue-100 aspect-square">
            <h2 className="text-2xl text-blue-900 font-semibold max-w-[200px] text-center">
              Your smile is our priority
            </h2>
          </div>

          {/* Pediatric Dentistry Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 md:col-span-2 aspect-[2/1]">
            <img
              src="https://img.freepik.com/free-photo/little-boy-dentist-chair-children-dental_627829-9373.jpg?t=st=1740075529~exp=1740079129~hmac=7e38c1f108cb6e77673fd455b1d7825850eba8cd5551ca46f6a766a5899a9d67&w=1380"
              alt="Child at dentist"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/80 to-transparent">
              <h3 className="text-slate-900 text-xl font-semibold">Pediatric Dentistry</h3>
            </div>
            <button className="absolute top-4 right-4 p-2 bg-white/70 rounded-full shadow">
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalServices;
