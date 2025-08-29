import React from 'react';
import { User, Award, Clock, Target, Heart, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const values = [
    {
      icon: <User className="w-6 h-6 text-blue-600" />,
      title: "Personal Service",
      description: "Direct communication with me - no account managers or middlemen. You get personal attention from start to finish."
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Professional Quality",
      description: "Every website is built to professional standards with modern design, fast loading, and mobile optimization."
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Reliable Delivery",
      description: "I meet deadlines and keep you informed throughout the process."
    },
    {
      icon: <Target className="w-6 h-6 text-red-600" />,
      title: "Results-Focused",
      description: "Your success is my priority. I build websites and campaigns designed to attract customers and grow your business."
    }
  ];

  const achievements = [
    "3+ years freelance experience",
    "3 successful website launches",
    "Specialized in local business marketing",
    "Google Ads & Facebook Ads certified",
    "100% client satisfaction rate"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main About Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Your Digital Marketing Partner
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <User size={48} className="text-white" />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hello! I'm a dedicated freelance web developer and digital marketing specialist based in the UK. 
                As a sole trader, I provide personalized service to help businesses establish and grow their online presence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I understand the challenges businesses face online. That's why I offer complete, affordable solutions 
                from professional websites to targeted marketing campaigns. When you work with me, you get direct access 
                to someone who genuinely cares about your success.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements & Credentials */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Why Choose Developize?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-100 mb-2">Proven Experience</h4>
                  <p className="text-blue-50">Multiple websites successfully launched for UK businesses</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100 mb-2">Versatile Expertise</h4>
                  <p className="text-blue-50">Worked across a wide range of industries and services</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100 mb-2">SEO-Optimised</h4>
                  <p className="text-blue-50">Every site is built to rank better on Google and attract more customers</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-100 mb-2">Marketing Know-How</h4>
                  <p className="text-blue-50">Skilled in Google and social media marketing (Facebook, Instagram, TikTok, Gumtree)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100 mb-2">Lead-Focused Design</h4>
                  <p className="text-blue-50">Websites created to generate enquiries, not just look good</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100 mb-2">Fast & Reliable</h4>
                  <p className="text-blue-50">Quick delivery, clear communication, and dedicated support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Me */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Businesses Choose Me
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">£350</div>
                <div className="text-gray-600">Complete websites from just £350 - no hidden costs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1-2 Days</div>
                <div className="text-gray-600">Typical delivery time for new websites</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Under 1 Hr</div>
                <div className="text-gray-600">Response time to emails and calls</div>
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Let's Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;