import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Shyamprasad - Digital Marketing Strategist in Kasaragod | SEO Expert Kerala';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional Digital Marketing Strategist in Kasaragod, Kerala. Expert in SEO, Social Media Marketing, PPC, and Website Development. Helping local businesses grow online.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional Digital Marketing Strategist in Kasaragod, Kerala. Expert in SEO, Social Media Marketing, PPC, and Website Development. Helping local businesses grow online.';
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Digital Marketing Strategist Kasaragod, SEO Expert Kasaragod, Social Media Marketing Kerala, PPC Specialist Kasaragod, Website Development Kasaragod, Digital Marketing Services Kerala';
    document.head.appendChild(metaKeywords);

    // Add author meta tag
    const metaAuthor = document.createElement('meta');
    metaAuthor.name = 'author';
    metaAuthor.content = 'Shyamprasad';
    document.head.appendChild(metaAuthor);

    // Add viewport meta tag if not exists
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Add Open Graph meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Shyamprasad - Digital Marketing Strategist in Kasaragod';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Professional Digital Marketing Strategist helping businesses in Kasaragod grow through SEO, Social Media Marketing, and PPC campaigns.';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Shyamprasad - Digital Marketing Strategist",
      "description": "Professional Digital Marketing Strategist in Kasaragod, Kerala specializing in SEO, Social Media Marketing, PPC, and Website Development",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kasaragod",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "telephone": "+91-9497735825",
      "url": window.location.origin,
      "sameAs": [
        "https://instagram.com/_shy_.am"
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Kerala, India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PPC Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;