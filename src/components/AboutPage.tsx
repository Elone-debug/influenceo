import { Heart, Target, Users, Award } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Digital Excellence',
      description: 'We\'re passionate about helping brands succeed online. This commitment drives everything we create and deliver.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by your success. Every campaign is optimized to deliver real, measurable results.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work closely with you as partners, not just service providers. Your goals become our goals.',
    },
    {
      icon: Award,
      title: 'Excellence in Execution',
      description: 'We maintain the highest standards in content quality, strategy, and customer service.',
    },
  ];

  const team = [
    {
      role: 'Creative Director',
      description: 'Leading our content creation and visual storytelling efforts',
    },
    {
      role: 'Social Media Strategist',
      description: 'Crafting engagement strategies that resonate with your audience',
    },
    {
      role: 'Video Editor',
      description: 'Transforming raw footage into compelling visual stories',
    },
    {
      role: 'Paid Ads Specialist',
      description: 'Maximizing ROI through targeted advertising campaigns',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a7b7d] to-[#0d5456] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">About Influenceo</h1>
            <p className="text-xl text-white/90">
              We're a team of digital marketing specialists dedicated to helping companies and brands thrive in the digital age
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Influenceo was born from a simple observation: many businesses have incredible products and services but struggle to reach their full potential in the digital world. We saw brands with amazing stories that weren't getting the visibility they deserved.
            </p>
            <p>
              That's why we created a digital marketing agency focused on delivering comprehensive solutions. We combine our expertise in social media marketing, video editing, content creation, and paid advertising to help businesses of all sizes succeed online.
            </p>
            <p>
              Today, we're proud to work with over 100 brands across various industries, helping them build their presence, attract more customers, and create thriving online communities. Every success story, every milestone achieved, and every new customer gained through our campaigns brings us joy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-14 h-14 bg-[#1a7b7d]/10 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="text-[#1a7b7d]" size={28} />
                </div>
                <h3 className="text-2xl mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl mb-8 text-center">Our Team</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            A dedicated team of specialists passionate about helping your cafe succeed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#1a7b7d] to-[#0d5456] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-white" size={48} />
                </div>
                <h3 className="text-xl mb-2">{member.role}</h3>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-[#1a7b7d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl mb-8 text-center">Why We're Different</h2>
          <div className="space-y-6 text-lg">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-2">Full-Service Solutions</h3>
                <p className="text-white/90">
                  From social media management to professional video editing, we offer comprehensive services under one roof, ensuring consistency and quality across all channels.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-2">Proven Track Record</h3>
                <p className="text-white/90">
                  Our clients see an average 250% increase in social media engagement and measurable business growth. We have the case studies and data to back it up.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-2">Personalized Approach</h3>
                <p className="text-white/90">
                  Every brand is unique, and your marketing should be too. We create custom strategies tailored to your industry, audience, and business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
