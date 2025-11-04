import { Instagram, Facebook, Youtube, TrendingUp, Camera, Edit3, BarChart3, Target, Video, Calendar } from 'lucide-react';

export function MenuPage() {
  const services = [
    {
      category: 'Social Media Marketing',
      icon: Instagram,
      items: [
        {
          icon: Camera,
          title: 'Instagram Management',
          description: 'Complete Instagram account management including content creation, stories, reels, and engagement.',
          features: ['Daily posting', 'Story highlights', 'Reels production', 'Hashtag strategy', 'Community engagement'],
        },
        {
          icon: Facebook,
          title: 'Facebook Marketing',
          description: 'Build your community and drive engagement with strategic Facebook marketing and advertising.',
          features: ['Page management', 'Targeted ads', 'Event promotion', 'Community building', 'Lead generation'],
        },
        {
          icon: Youtube,
          title: 'YouTube Content Creation',
          description: 'Professional video content that showcases your brand story and offerings.',
          features: ['Video production', 'Channel optimization', 'Shorts creation', 'Video SEO', 'Analytics tracking'],
        },
      ],
    },
    {
      category: 'Paid Advertising',
      icon: TrendingUp,
      items: [
        {
          icon: TrendingUp,
          title: 'Google Ads',
          description: 'Reach customers actively searching for your products or services with strategic Google Ads.',
          features: ['Search ads', 'Display ads', 'Local campaigns', 'Keyword research', 'ROI optimization'],
        },
        {
          icon: Target,
          title: 'Social Media Ads',
          description: 'Targeted advertising campaigns across Instagram and Facebook to reach your ideal audience.',
          features: ['Audience targeting', 'Ad creative design', 'A/B testing', 'Campaign optimization', 'Performance reporting'],
        },
      ],
    },
    {
      category: 'Content & Strategy',
      icon: Edit3,
      items: [
        {
          icon: Video,
          title: 'Video Editing',
          description: 'Professional video editing services that bring your content to life with polish and creativity.',
          features: ['Color grading', 'Sound design', 'Motion graphics', 'Transitions & effects', 'Multi-format delivery'],
        },
        {
          icon: Edit3,
          title: 'Content Creation',
          description: 'High-quality photos, videos, and graphics that make your brand stand out.',
          features: ['Professional photography', 'Graphic design', 'Copywriting', 'Brand assets', 'Visual consistency'],
        },
        {
          icon: Calendar,
          title: 'Content Planning',
          description: 'Strategic content calendar and planning to maintain consistent, engaging presence.',
          features: ['Content calendar', 'Campaign planning', 'Trend monitoring', 'Brand guidelines', 'Content strategy'],
        },
        {
          icon: BarChart3,
          title: 'Analytics & Reporting',
          description: 'Comprehensive analytics and insights to track your digital marketing performance.',
          features: ['Monthly reports', 'Performance metrics', 'Audience insights', 'Competitor analysis', 'Growth tracking'],
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1a7b7d] to-[#0d5456] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">Our Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive digital marketing solutions designed to help your brand thrive in the digital age
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#1a7b7d] rounded-lg flex items-center justify-center">
                  <category.icon className="text-white" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl">{category.category}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.items.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#1a7b7d]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="text-[#1a7b7d]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm text-gray-500 mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Flexible Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small businesses</p>
              <div className="mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                    2 social media platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                    12 posts per month
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                    Basic analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                    Monthly reporting
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1a7b7d] text-white rounded-xl p-8 border-2 border-[#1a7b7d] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#1a7b7d] px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl mb-2">Growth</h3>
              <p className="text-white/90 mb-6">For growing brands</p>
              <div className="mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    All social media platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    20 posts per month
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    Google Ads campaign
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    Advanced analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    Weekly optimization
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">For established companies</p>
              <div className="mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                    Everything in Growth
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                    30 posts per month
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                    Professional video editing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                    Influencer partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a7b7d] rounded-full"></div>
                    Dedicated account manager
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
