import React from 'react';
import { Calendar, Clock, ArrowRight, Search, Users, TrendingUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Local SEO Strategies for Kasaragod Businesses in 2024',
      excerpt: 'Discover the latest local SEO techniques to dominate search results in Kasaragod and attract more local customers to your business.',
      category: 'SEO',
      date: '2024-02-10',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Search,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Social Media Marketing Trends for Kerala Businesses',
      excerpt: 'Learn about the latest social media trends and how Kerala businesses can leverage them to build stronger connections with their audience.',
      category: 'Social Media',
      date: '2024-02-08',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Google Ads vs Facebook Ads: Which is Better for Local Businesses?',
      excerpt: 'A comprehensive comparison of Google Ads and Facebook Ads to help you choose the right platform for your Kasaragod business.',
      category: 'PPC',
      date: '2024-02-05',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Website Speed Optimization: Why It Matters for Kerala Businesses',
      excerpt: 'Learn why website speed is crucial for your business success and discover practical tips to improve your site performance.',
      category: 'Web Development',
      date: '2024-02-03',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Content Marketing Strategies That Work in Kerala',
      excerpt: 'Discover effective content marketing strategies tailored for the Kerala market and learn how to create content that resonates.',
      category: 'Content Marketing',
      date: '2024-02-01',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Digital Marketing Budget Planning for Small Businesses',
      excerpt: 'A practical guide to planning your digital marketing budget effectively and getting the maximum ROI from your marketing spend.',
      category: 'Strategy',
      date: '2024-01-28',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: TrendingUp,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const categories = ['All', 'SEO', 'Social Media', 'PPC', 'Web Development', 'Content Marketing', 'Strategy'];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Digital Marketing Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest digital marketing strategies, tips, and trends specifically for businesses in Kasaragod and Kerala.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                index === 0 
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-violet-50 hover:text-violet-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${post.color} text-white text-sm font-medium rounded-full`}>
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-violet-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-violet-600 hover:text-violet-700 font-medium">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <div className={`w-10 h-10 bg-gradient-to-r ${post.color} rounded-lg flex items-center justify-center`}>
                    <post.icon className="text-white" size={20} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Digital Marketing Tips</h3>
          <p className="text-xl mb-8 opacity-90">
            Get weekly insights, strategies, and tips delivered straight to your inbox
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe at any time. Privacy policy applies.
          </p>
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black text-center mb-8">Popular Topics</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Local SEO Kasaragod',
              'Google My Business',
              'Facebook Marketing Kerala',
              'Website Speed Optimization',
              'Content Marketing Tips',
              'PPC Campaign Management',
              'Social Media Strategy',
              'Digital Marketing ROI'
            ].map((topic, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:text-violet-600 transition-all duration-200 cursor-pointer"
              >
                #{topic.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;