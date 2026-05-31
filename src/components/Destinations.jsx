function Destinations() {
  const destinations = [
    {
      name: "Bali",
      price: "From ₹69,999",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    },
    {
      name: "Paris",
      price: "From ₹89,999",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114",
    },
    {
      name: "Maldives",
      price: "From ₹99,999",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    },
  ];

  return (
    <section className="py-28 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#D4A373] text-sm">
            Explore The World
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#1E2A44]">
            Popular Destinations
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking destinations carefully selected for unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group relative overflow-hidden rounded-[32px] shadow-xl cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm mb-4">
                  Premium Destination
                </span>

                <h3 className="text-4xl font-bold">
                  {destination.name}
                </h3>

                <p className="mt-2 text-white/90">
                  {destination.price}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Destinations;