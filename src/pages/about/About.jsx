import React from 'react';
import { Users, Award, Heart, Clock, Star, ArrowRight } from 'lucide-react';

// Hero Section Component
const AboutHero = () => {
  return (
    <div className="relative bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Leading the Way in Modern Dentistry
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              With over 15 years of experience, we've built a reputation for excellence in dental care, 
              combining cutting-edge technology with compassionate service.
            </p>
            <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-colors">
              Meet Our Team
            </button>
          </div>
          <div className="relative">
            <img 
              src="/api/placeholder/600/400" 
              alt="Modern dental clinic" 
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Component
const Stats = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "10k+", label: "Happy Patients" },
    { number: "25+", label: "Expert Dentists" },
    { number: "100%", label: "Satisfaction" }
  ];

  return (
    <div className="bg-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-teal-500 mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mission Component
const Mission = () => {
  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/api/placeholder/600/600" 
              alt="Dental team" 
              className="rounded-3xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission & Values</h2>
            <p className="text-slate-400 mb-8">
              We're committed to providing exceptional dental care that improves our patients' 
              quality of life. Our approach combines clinical excellence with a warm, 
              welcoming environment.
            </p>
            <div className="space-y-6">
              {[
                { icon: Heart, title: "Patient-Centered Care", desc: "Your comfort and satisfaction are our top priorities" },
                { icon: Award, title: "Excellence in Dentistry", desc: "Committed to the highest standards of dental care" },
                { icon: Users, title: "Community Focus", desc: "Proud to serve and support our local community" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-teal-500/10 p-3 rounded-xl">
                    <item.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Team Preview Component
const TeamPreview = () => {
  const team = [
    { name: "Dr. Sarah Johnson", role: "Lead Dentist", image: "/api/placeholder/300/300" },
    { name: "Dr. Michael Chen", role: "Orthodontist", image: "/api/placeholder/300/300" },
    { name: "Dr. Emily Davis", role: "Pediatric Dentist", image: "/api/placeholder/300/300" },
    { name: "Dr. James Wilson", role: "Dental Surgeon", image: "/api/placeholder/300/300" }
  ];

  return (
    <div className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Expert Team</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our team of experienced dental professionals is dedicated to providing 
            you with the highest quality care in a comfortable environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur rounded-3xl p-6 text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-white font-medium mb-1">{member.name}</h3>
              <p className="text-slate-400 mb-4">{member.role}</p>
              <button className="text-teal-500 hover:text-teal-400 transition-colors flex items-center justify-center gap-2 mx-auto">
                View Profile
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Technology Section Component
const Technology = () => {
  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Technology</h2>
            <p className="text-slate-400 mb-8">
              We invest in the latest dental technology to provide more accurate diagnoses, 
              efficient treatments, and comfortable patient experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "3D Scanning", desc: "Precise digital impressions" },
                { title: "Digital X-Rays", desc: "Lower radiation exposure" },
                { title: "CAD/CAM", desc: "Same-day dental crowns" },
                { title: "Laser Dentistry", desc: "Minimally invasive care" }
              ].map((tech, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur rounded-xl p-6">
                  <h3 className="text-white font-medium mb-2">{tech.title}</h3>
                  <p className="text-slate-400">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="/api/placeholder/600/400" 
              alt="Dental technology" 
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reviews Preview Component
const ReviewsPreview = () => {
  return (
    <div className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Patients Say</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur rounded-3xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                ))}
              </div>
              <p className="text-slate-400 mb-6">
                "Exceptional service and care. The staff is professional and friendly, 
                making every visit comfortable and stress-free."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="/api/placeholder/40/40" 
                  alt="Patient" 
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="text-white font-medium">Jane Smith</div>
                  <div className="text-slate-400 text-sm">Patient since 2020</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main About Page Component
const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <Stats />
      <Mission />
      <TeamPreview />
      <Technology />
      <ReviewsPreview />
    </div>
  );
};

export default AboutPage;