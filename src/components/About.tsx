import React from 'react';
import { GraduationCap, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const certifications = [
    'HubSpot Academy',
    'SEMrush Certified',
    'Google Analytics Academy',
    'Google Ads Skillshop',
    'Microsoft Certified',
    'LinkedIn Learning'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Digital Marketing Strategist helping businesses in Kasaragod and beyond 
            achieve their online growth goals through data-driven strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-violet-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Education</h3>
                  <p className="text-gray-600">
                    B.Com graduate from People's College, Munnad, under Kannur University. 
                    Completed advanced Digital Marketing course from DigitalX Marketers Academy, Kochi.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                  <Target className="text-violet-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">My Mission</h3>
                  <p className="text-gray-600">
                    To empower local businesses in Kasaragod with cutting-edge digital marketing 
                    strategies that drive real results. I believe every business deserves to thrive 
                    in the digital landscape.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                  <Heart className="text-violet-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Why Digital Marketing?</h3>
                  <p className="text-gray-600">
                    I started my journey in digital marketing because I witnessed how traditional 
                    businesses in Kerala were struggling to adapt to the digital age. My passion 
                    lies in bridging this gap and helping them succeed online.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-black mb-4">Get in Touch</h4>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">WhatsApp:</span> 
                  <a href="tel:+919497735825" className="text-violet-600 hover:text-violet-700 ml-2">
                    9497735825
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Instagram:</span> 
                  <a 
                    href="https://instagram.com/_shy_.am" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:text-violet-700 ml-2"
                  >
                    @_shy_.am
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Location:</span> Kasaragod, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-violet-600" size={28} />
                <h3 className="text-2xl font-bold text-black">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-black">Core Expertise</h4>
              {[
                { skill: 'SEO & Local SEO', level: 95 },
                { skill: 'Social Media Marketing', level: 90 },
                { skill: 'PPC & Google Ads', level: 88 },
                { skill: 'Website Development', level: 85 },
                { skill: 'Analytics & Reporting', level: 92 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">{item.skill}</span>
                    <span className="text-violet-600 font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;