import baliPackage from "../assets/images/mascot/bali-package.png";
import parisPackage from "../assets/images/mascot/paris-package.png";
import maldivesPackage from "../assets/images/mascot/maldives-package.png";

function Packages() {
  const packages = [
    {
      title: "Bali Escape",
      duration: "5 Days / 4 Nights",
      price: "₹69,999",
      image: baliPackage,
    },
    {
      title: "Paris Romance",
      duration: "7 Days / 6 Nights",
      price: "₹89,999",
      image: parisPackage,
    },
    {
      title: "Maldives Luxury",
      duration: "6 Days / 5 Nights",
      price: "₹99,999",
      image: maldivesPackage,
    },
  ];

  return (
    <section className="py-32 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#D4A373] text-sm">
            Curated Experiences
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#1E2A44]">
            Travel Packages
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Handcrafted journeys designed for unforgettable adventures.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-[320px] w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#1E2A44]">
                  {pkg.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {pkg.duration}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#1E2A44]">
                    {pkg.price}
                  </span>

                  <button className="px-5 py-3 rounded-full bg-[#1E2A44] text-white hover:opacity-90 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;