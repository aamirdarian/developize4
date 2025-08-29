import React from 'react';
import { Globe, TrendingUp, Users, Zap, Video, Search, Target, ShoppingCart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Professional Website Development",
      description: "Custom, responsive websites that convert visitors into customers. Includes domain setup, hosting, and mobile optimization.",
      features: ["Mobile-responsive design", "Fast loading speeds", "SEO-ready structure", "Contact forms"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "SEO Optimization",
      description: "Get found on Google with proven SEO strategies. Improve your search rankings and drive organic traffic to your business.",
      features: ["Keyword research", "On-page optimization", "Local SEO", "Performance monitoring"]
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Google & Facebook Ads",
      description: "Targeted advertising campaigns that deliver results. Reach your ideal customers with precision-targeted ads across Google and social media.",
      features: ["Campaign setup", "Audience targeting", "Ad creation", "Performance optimization"]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Social Media Management",
      description: "Professional social media presence across Facebook, Instagram, TikTok, and Google Business Profile. Engage your audience effectively.",
      features: ["Profile optimization", "Content strategy", "Regular posting", "Community management"]
    },
    {
      icon: <Video className="w-8 h-8 text-orange-600" />,
      title: "Video Creation",
      description: "Engaging video content for your website and social media. Professional videos that showcase your business and services effectively.",
      features: ["Promotional videos", "Social media content", "Product demonstrations", "Testimonial videos"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Complete Digital Marketing",
      description: "Full-service digital marketing solutions including email marketing, content creation, and online reputation management.",
      features: ["Email campaigns", "Content marketing", "Online listings", "Review management"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Complete Digital Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From professional websites to targeted marketing campaigns, I provide everything you need to succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <span>Discuss Your Project</span>
            <Search size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;