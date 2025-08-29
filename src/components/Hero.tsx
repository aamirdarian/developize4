import React from 'react';
import { ArrowRight, CheckCircle, Star, Shield, Clock, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200">
            <Shield size={16} />
            <span>Trusted by businesses across the UK</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">Professional Websites</span>{' '}
            <span className="block">for UK Businesses</span>{' '}
            <span className="block mt-2">From Just <span className="text-green-600">£350</span></span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Professional, SEO-friendly <strong>business websites</strong> designed to attract more customers. 
            Our <strong>£350 website package</strong> includes domain + hosting setup — everything you need to succeed online.
          </p>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-green-700 bg-green-50 px-4 py-3 rounded-lg border border-green-200">
              <CheckCircle size={20} />
              <span className="font-semibold text-sm">Domain & Hosting Included</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-700 bg-blue-50 px-4 py-3 rounded-lg border border-blue-200">
              <Clock size={20} />
              <span className="font-semibold text-sm">Ready in 1-2 Days</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-700 bg-purple-50 px-4 py-3 rounded-lg border border-purple-200">
              <Award size={20} />
              <span className="font-semibold text-sm">SEO Optimized</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-3 border-2 border-blue-600 hover:border-blue-700"
            >
              <span>Get Your Website Today</span>
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Social Proof & Stats */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8 max-w-lg mx-auto">
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-600 font-medium">5.0 Rating</span>
            </div>
            <p className="text-lg font-bold text-gray-900 mb-1">3 Successful Websites Delivered</p>
            <p className="text-sm text-gray-600">100% Client Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;