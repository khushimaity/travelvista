function TrustSection() {
  const stats = [
    {
      number: "50+",
      title: "Destinations",
      description: "Carefully curated travel experiences worldwide",
    },
    {
      number: "10K+",
      title: "Happy Travelers",
      description: "Adventurers who explored with TravelVista",
    },
    {
      number: "4.9★",
      title: "Average Rating",
      description: "Trusted and loved by our community",
    },
    {
      number: "24/7",
      title: "Support",
      description: "Always available whenever you need us",
    },
  ];

  return (
    <section className="py-32 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#D4A373] text-sm">
            Why Travelers Love Us
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#1E2A44]">
            Travel With Confidence
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Thousands of travelers trust TravelVista to create unforgettable journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-5xl font-bold text-[#1E2A44]">
                {item.number}
              </h3>

              <h4 className="mt-4 text-xl font-semibold text-[#1E2A44]">
                {item.title}
              </h4>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustSection;