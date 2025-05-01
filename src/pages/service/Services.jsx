// ServiceDetail.jsx
const ServiceDetail = ({ title, description, features, image }) => {
    return (
      <div className="bg-white/5 rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-slate-300 mb-4">{description}</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-slate-300">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Book Appointment
            </button>
          </div>
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    );
  };
  
  // FAQSection.jsx
  const FAQSection = () => {
    const faqs = [
      {
        question: "What insurance plans do you accept?",
        answer: "We accept most major insurance plans and provide flexible payment options. Contact our office for specific details about your coverage."
      },
      {
        question: "How often should I visit the dentist?",
        answer: "We recommend scheduling regular check-ups and cleanings every six months for optimal oral health maintenance."
      },
      {
        question: "Do you offer emergency dental services?",
        answer: "Yes, we provide emergency dental care. Contact our 24/7 emergency line for immediate assistance."
      },
      {
        question: "What safety protocols do you follow?",
        answer: "We maintain strict sterilization and safety protocols following CDC and ADA guidelines to ensure patient safety."
      }
    ];
  
    return (
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // PricingSection.jsx
  const PricingSection = () => {
    const prices = [
      {
        service: "Regular Cleaning",
        price: "From $100",
        includes: ["Dental Cleaning", "Examination", "X-rays (if needed)"]
      },
      {
        service: "Dental Implants",
        price: "From $3,000",
        includes: ["Consultation", "Implant Surgery", "Crown Placement"]
      },
      {
        service: "Orthodontics",
        price: "From $5,000",
        includes: ["Initial Consultation", "Braces/Aligners", "Regular Adjustments"]
      }
    ];
  
    return (
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8">Treatment Costs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {prices.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{item.service}</h3>
              <p className="text-2xl text-blue-400 font-bold mb-4">{item.price}</p>
              <ul className="space-y-2">
                {item.includes.map((feature, idx) => (
                  <li key={idx} className="text-slate-300 flex items-center">
                    <span className="mr-2">•</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Services.jsx
  const Services = () => {
    const services = [
      {
        title: "General Dentistry",
        description: "Comprehensive dental care focusing on prevention, diagnosis, and treatment of various dental conditions. We emphasize preventive care to maintain your oral health.",
        features: [
          "Regular check-ups and cleanings",
          "Digital X-rays and examinations",
          "Cavity fillings and treatments",
          "Gum disease treatment",
          "Root canal therapy"
        ],
        image: "/api/placeholder/600/400"
      },
      {
        title: "Cosmetic Dentistry",
        description: "Transform your smile with our advanced cosmetic dental procedures. We offer various treatments to enhance the appearance of your teeth and boost your confidence.",
        features: [
          "Teeth whitening",
          "Porcelain veneers",
          "Dental bonding",
          "Smile makeover",
          "Composite restorations"
        ],
        image: "/api/placeholder/600/400"
      },
      {
        title: "Dental Implants",
        description: "Replace missing teeth with permanent, natural-looking dental implants. Our experienced team uses the latest technology for optimal results.",
        features: [
          "Single tooth implants",
          "Multiple teeth implants",
          "Full arch replacements",
          "Implant-supported dentures",
          "3D imaging and planning"
        ],
        image: "/api/placeholder/600/400"
      },
      {
        title: "Orthodontics",
        description: "Achieve a straight, beautiful smile with our orthodontic treatments. We offer various options suitable for both adults and children.",
        features: [
          "Traditional braces",
          "Clear aligners",
          "Invisible braces",
          "Retainers",
          "Early orthodontic treatment"
        ],
        image: "/api/placeholder/600/400"
      }
    ];
  
    return (
      <div className="bg-slate-900 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Dental Services</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We provide comprehensive dental care using state-of-the-art technology and techniques.
              Our team is committed to ensuring your comfort and satisfaction throughout your treatment.
            </p>
          </div>
  
          {/* Services */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <ServiceDetail key={index} {...service} />
            ))}
          </div>
  
          {/* Pricing Section */}
          <PricingSection />
  
          {/* FAQ Section */}
          <FAQSection />
  
          {/* Call to Action */}
          <div className="mt-16 text-center bg-white/5 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Schedule Your Visit?</h2>
            <p className="text-slate-300 mb-6">
              Contact us today to book your appointment or learn more about our services.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
                Book Appointment
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;