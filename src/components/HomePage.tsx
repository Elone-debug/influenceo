import { ArrowRight, Instagram, Facebook, Youtube, TrendingUp, Video, Share2 } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { StatsSection } from './StatsSection';
import networkBg from 'figma:asset/59d873d4794db2b1814f4a403ff0d66c43445e2a.png';

interface HomePageProps {
  onNavigate: (page: 'home' | 'menu' | 'about' | 'enquiry') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Instagram,
      title: 'Instagram Marketing',
      description: 'Create engaging stories, reels, and posts that grow your brand presence and audience.',
      color: '#E4405F',
    },
    {
      icon: Facebook,
      title: 'Facebook Campaigns',
      description: 'Build a loyal community and drive engagement with strategic Facebook advertising.',
      color: '#1877F2',
    },
    {
      icon: Youtube,
      title: 'YouTube Content',
      description: 'Produce compelling video content that showcases your brand story and offerings.',
      color: '#FF0000',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services that bring your content to life with polish and creativity.',
      color: '#9333EA',
    },
    {
      icon: TrendingUp,
      title: 'Google Ads',
      description: 'Reach customers actively searching for your products or services with targeted Google Ads.',
      color: '#4285F4',
    },
    {
      icon: Share2,
      title: 'Content Strategy',
      description: 'Develop comprehensive content strategies that align with your business goals and audience.',
      color: '#10B981',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a7b7d] to-[#0d5456] text-white overflow-hidden">
        {/* Network Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${networkBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in-down">
              <span className="text-sm">Transforming Brands Through Digital Marketing</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 animate-fade-in-up font-bold">
              Elevate Your Brand's Digital Presence
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
              Comprehensive digital marketing solutions for companies and brands. From social media management to video editing, we help you stand out and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <button
                onClick={() => onNavigate('enquiry')}
                className="bg-white text-[#1a7b7d] px-8 py-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Start Your Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                Explore Services
              </button>
            </div>
            
            {/* Social proof badges */}
            <div className="flex flex-wrap gap-6 mt-12 text-sm animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white/80">100+ Brands Served</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
                <span className="text-white/80">5M+ Social Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                <span className="text-white/80">98% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#1a7b7d]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a7b7d]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#1a7b7d]/10 rounded-full">
              <span className="text-[#1a7b7d]">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('menu')}
              className="bg-[#1a7b7d] text-white px-8 py-4 rounded-lg hover:bg-[#156567] hover:scale-105 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
            >
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#1a7b7d]/10 rounded-full">
              <span className="text-[#1a7b7d]">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4">
              Why Choose <span className="text-[#1a7b7d]">Influenceo</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through strategy, creativity, and data-driven insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a7b7d] to-[#0d5456] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <TrendingUp className="text-white" size={36} />
              </div>
              <h3 className="text-2xl mb-3">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed">
                Our portfolio speaks for itself with measurable growth across diverse industries
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a7b7d] to-[#0d5456] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Video className="text-white" size={36} />
              </div>
              <h3 className="text-2xl mb-3">Creative Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                From video editing to content creation, we deliver high-quality creative work
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition-all hover:shadow-lg group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a7b7d] to-[#0d5456] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Share2 className="text-white" size={36} />
              </div>
              <h3 className="text-2xl mb-3">Multi-Platform Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Reach your audience wherever they are with coordinated campaigns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1a7b7d] to-[#0d5456] text-white relative overflow-hidden">
        {/* Network Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${networkBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Animated circles */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-75"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm">Let's Get Started</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
            Let's create a digital marketing strategy that drives results and grows your business
          </p>
          <button
            onClick={() => onNavigate('enquiry')}
            className="bg-white text-[#1a7b7d] px-10 py-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2 group"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Add custom styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}
