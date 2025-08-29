import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const websiteFeatures = [
    "Professional responsive design",
    "Domain name included",
    "Web hosting setup",
    "Contact forms & enquiry system",
    "Google Maps integration",
    "Basic SEO optimization",
    "Social media links",
    "Mobile-friendly design",
    "SSL security certificate",
    "1 month free support"
  ];

  const additionalServices = [
    { name: "SEO Optimization Package", description: "Comprehensive SEO audit and optimization" },
    { name: "Google Ads Campaign Setup", description: "Professional ad campaign creation and management" },
    { name: "Facebook & Instagram Ads", description: "Social media advertising campaigns" },
    { name: "Social Media Profile Setup", description: "Facebook, Instagram, TikTok, Google Business Profile" },
    { name: "Video Creation", description: "Promotional videos and social media content" },
    { name: "Website Maintenance", description: "Ongoing support and content updates" }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transparent, Affordable Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional websites and digital marketing services designed for businesses. No hidden fees, no surprises.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Website Package */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-500 p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
              Most Popular
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Website Package</h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-5xl font-bold text-blue-600">£350</span>
                <div className="text-left">
                  <div className="text-gray-500 text-sm">one-time</div>
                  <div className="text-gray-500 text-sm">payment</div>
                </div>
              </div>
              <p className="text-gray-600 text-lg">Everything you need to get your business online professionally</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {websiteFeatures.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 justify-center">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Plus:</h4>
                <ul className="space-y-2">
                  {websiteFeatures.slice(5).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 justify-center">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Additional Services</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 cursor-pointer"
                  >
                    Contact for Quote
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Need a Custom Package?</h4>
              <p className="text-gray-600 mb-4">
                I offer flexible packages combining multiple services. Get in touch for a personalized quote.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;