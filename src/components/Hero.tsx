import React from 'react';
import { ArrowRight, MapPin, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-violet-600">
                <span className="font-medium text-xl">Hi, I am</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-black">Shyamprasad</span>
                <br />
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Marketing
                </span>
                <br />
                <span className="text-black">Strategist</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Helping businesses grow through smart digital strategies. 
                Specializing in SEO, Social Media Marketing, PPC, and Website Development.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">20+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Free Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="https://wa.me/919497735825"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-violet-600 text-violet-600 font-semibold rounded-lg hover:bg-violet-600 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Award size={16} className="text-violet-600" />
              <span>Certified by HubSpot, Google, SEMrush, Microsoft & LinkedIn</span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/Shyamdp.jpg"
                alt="Shyamprasad - Digital Marketing Strategist in Kasaragod"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-violet-300 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;