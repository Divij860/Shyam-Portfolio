import React from 'react';
import { Search, Users, MousePointer, Globe, TrendingUp, Target, BarChart, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO (Search Engine Optimization)',
      description: 'Get ranked on Google and drive organic growth for your Kasaragod business.',
      features: [
        'Local SEO for Kasaragod businesses',
        'Keyword research & optimization',
        'Technical SEO audits',
        'Content optimization',
        'Google My Business optimization'
      ],
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'SMM (Social Media Marketing)',
      description: 'Build brand presence and engage audiences across all social platforms.',
      features: [
        'Instagram & Facebook marketing',
        'Content creation & strategy',
        'Community management',
        'Influencer collaborations',
        'Social media advertising'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MousePointer,
      title: 'SEM / PPC (Pay-Per-Click)',
      description: 'Run high-converting ad campaigns with measurable ROI.',
      features: [
        'Google Ads management',
        'Facebook & Instagram ads',
        'Campaign optimization',
        'Landing page creation',
        'Conversion tracking'
      ],
      color: 'from-blue-500 to-violet-500'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Create responsive, fast, and conversion-focused websites.',
      features: [
        'Responsive web design',
        'E-commerce development',
        'WordPress websites',
        'Speed optimization',
        'Mobile-first approach'
      ],
      color: 'from-green-500 to-blue-500'
    }
  ];

  const additionalServices = [
    { icon: TrendingUp, title: 'Digital Strategy Consulting', desc: 'Comprehensive digital marketing roadmaps' },
    { icon: Target, title: 'Conversion Rate Optimization', desc: 'Maximize your website conversions' },
    { icon: BarChart, title: 'Analytics & Reporting', desc: 'Data-driven insights and performance tracking' },
    { icon: Smartphone, title: 'Mobile Marketing', desc: 'Reach customers on mobile devices effectively' }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored for businesses in Kasaragod and Kerala
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-black text-center mb-8">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how I can help your Kasaragod business succeed online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919497735825"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                WhatsApp Consultation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-200"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;