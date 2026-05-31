import travelCompanion from "../assets/images/mascot/travel-companion.png";

function TravelCompanion() {
  return (
    <section className="py-32 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Image */}

          <div className="flex justify-center">
            <img
              src={travelCompanion}
              alt="Travel Companion"
              className="w-full max-w-[420px] rounded-[40px] shadow-2xl"            />
          </div>

          {/* Content */}

          <div>
            <p className="uppercase tracking-[0.35em] text-[#D4A373] text-sm">
              Meet Your Travel Companion
            </p>

            <h2 className="mt-5 text-5xl lg:text-6xl font-bold text-[#1E2A44] leading-tight">
              Every Great Journey Starts With A Story
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Travel isn't just about destinations.
              It's about discovering new perspectives,
              collecting unforgettable memories,
              and experiencing moments that stay with you forever.
            </p>

            <button className="mt-8 px-8 py-4 rounded-full bg-[#1E2A44] text-white hover:scale-105 transition">
              Start Your Journey
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TravelCompanion;