function WhyTravelVista() {
  return (
    <section className="py-32 px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1E2A44]">
          Why TravelVista?
        </h2>

        <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
          Every journey is crafted with care, ensuring unforgettable memories
          and seamless experiences from start to finish.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1E2A44]">
              Personalized Trips
            </h3>

            <p className="mt-4 text-gray-600">
              Tailor-made itineraries designed around your interests and travel style.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1E2A44]">
              Premium Experiences
            </h3>

            <p className="mt-4 text-gray-600">
              Access handpicked destinations, stays, and activities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1E2A44]">
              Safe Travel
            </h3>

            <p className="mt-4 text-gray-600">
              Travel confidently with trusted support throughout your journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyTravelVista;