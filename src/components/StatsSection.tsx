export function StatsSection() {
  const stats = [
    { number: '100+', label: 'Brands Served' },
    { number: '250%', label: 'Avg. Engagement Increase' },
    { number: '5M+', label: 'Social Media Reach' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="py-16 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl text-[#1a7b7d] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
