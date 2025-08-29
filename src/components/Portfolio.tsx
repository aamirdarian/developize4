import React from 'react';
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Prime Plumbing Leicester",
      url: "primeplumbingleicester.co.uk",
      link: "https://primeplumbingleicester.co.uk",
      description: "Comprehensive digital marketing solution including professional website development, domain registration and hosting setup, enhanced Gumtree advertising campaigns, Facebook business page creation, and Google Business Profile optimization.",
      results: ["Professional website with mobile optimization", "Domain registration and hosting setup", "Enhanced Gumtree ad performance", "Complete social media presence", "Optimized Google Business Profile"],
      image: "/Prime Plumbing & Heating Hero Section.png"
    },
    {
      title: "Jungle Clearances",
      url: "jungleclearances.co.uk", 
      link: "https://jungleclearances.co.uk",
      description: "Comprehensive digital presence development for garden and waste clearance service, including professional website creation, domain registration and hosting setup, Google Business Profile optimization, and strategic advertising campaign management.",
      results: ["Professional website with service showcase", "Domain registration and hosting setup", "Optimized Google Business Profile", "High-performing advertising campaigns", "Increased local visibility"],
      image: "/Jungle clearances logo.png"
    },
    {
      title: "NTH Construction",
      url: "nthconstruction.co.uk",
      link: "https://nthconstruction.co.uk", 
      description: "Complete digital brand establishment for construction company, including professional website development, social media presence across Facebook and TikTok, Google Business Profile optimization, custom business card design, domain registration, hosting setup, and private email setup.",
      results: ["Professional website with service showcase", "Complete social media presence", "Custom business card design", "Domain registration and hosting setup", "Private email setup", "Optimized Google Business Profile"],
      image: "/Nth construction logo.png"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how I've helped businesses establish their professional online presence and grow their customer base.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  LIVE
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <p className="text-sm text-blue-600 mb-3 font-medium">{project.url}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <TrendingUp size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-blue-100">Websites Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Under 1 Hr</div>
              <div className="text-blue-100">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;