import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient since 2022",
      image: "/api/placeholder/100/100",
      quote: "The level of care and attention I received was exceptional. The staff made me feel comfortable throughout my entire treatment.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Patient since 2021",
      image: "/api/placeholder/100/100",
      quote: "State-of-the-art facility with a caring team. My dental anxiety disappeared after my first visit.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Patient since 2023",
      image: "/api/placeholder/100/100",
      quote: "The personalized treatment plan they created for me was perfect. I couldn't be happier with the results.",
      rating: 5
    },
    {
      name: "John Doe",
      role: "Patient since 2021",
      image: "/api/placeholder/100/100",
      quote: "A wonderful experience with a professional team. Highly recommend for anyone in need of dental care.",
      rating: 5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Patient Stories</h2>
            <p className="text-gray-600 max-w-lg">
              Read what our patients say about their experience at our clinic and the results of their treatments.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
              disabled={currentIndex + 3 >= testimonials.length}
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors shadow-sm"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-800 text-lg mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-slate-900 font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
