import React from 'react';
import { ExternalLink, TrendingUp, Users, Search, ShoppingCart } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Local Restaurant Chain - Kasaragod',
      category: 'SEO & Local Marketing',
      challenge: 'Low online visibility and foot traffic',
      solution: 'Implemented local SEO strategy, Google My Business optimization, and social media marketing',
      results: [
        '300% increase in Google searches',
        '150% boost in foot traffic',
        'Top 3 ranking for "best restaurant Kasaragod"',
        '500+ new social media followers'
      ],
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Search,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'E-commerce Fashion Store',
      category: 'PPC & Social Media Marketing',
      challenge: 'Low online sales and brand awareness',
      solution: 'Created targeted Facebook & Instagram ad campaigns, influencer partnerships',
      results: [
        '400% increase in online sales',
        '50,000+ reach per month',
        '25% reduction in cost per acquisition',
        '2000+ new customers acquired'
      ],
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Healthcare Clinic - Kerala',
      category: 'Website Development & SEO',
      challenge: 'Outdated website and poor search rankings',
      solution: 'Built responsive website, implemented SEO strategy, created content marketing plan',
      results: [
        '250% increase in website traffic',
        '180% more appointment bookings',
        'Page 1 ranking for medical keywords',
        '95% improvement in page speed'
      ],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Educational Institute',
      category: 'Social Media & Content Marketing',
      challenge: 'Low student enrollment and engagement',
      solution: 'Developed comprehensive social media strategy, created educational content, ran targeted campaigns',
      results: [
        '300% increase in inquiries',
        '150% boost in enrollment',
        '10,000+ social media engagement',
        '80% increase in brand awareness'
      ],
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Users,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Restaurant Owner, Kasaragod',
      text: 'Shyamprasad transformed our online presence completely. Our restaurant is now the top choice in Kasaragod!',
      rating: 5
    },
    {
      name: 'Priya Nair',
      business: 'Fashion Store Owner',
      text: 'Amazing results! Our online sales increased by 400% within 3 months. Highly recommend his services.',
      rating: 5
    },
    {
      name: 'Dr. Suresh',
      business: 'Healthcare Professional',
      text: 'Professional approach and excellent results. Our clinic bookings doubled after working with Shyamprasad.',
      rating: 5
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Portfolio & Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results for real businesses. See how I've helped companies in Kasaragod and Kerala grow their digital presence.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r ${project.color} rounded-2xl shadow-2xl overflow-hidden`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 text-white">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <project.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-white/80">{project.category}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                      <p className="text-white/90">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Solution</h4>
                      <p className="text-white/90">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-black text-center mb-12">What Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-black mb-4">Ready to See Similar Results?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how I can help grow your business in Kasaragod
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Success Story
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;