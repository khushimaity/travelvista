import { useParams, Link, useNavigate } from "react-router-dom";
import { packages } from "../data/packages";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

function PackageDetails() {
  const { slug } = useParams();

  const navigate = useNavigate();

  const selectedPackage = packages.find(
    (pkg) => pkg.slug === slug
  );

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500">
          Package Not Found
        </h1>
      </div>
    );
  }

  return (
      <PageTransition>
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      {/* Hero Section */}

      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={selectedPackage.image}
            alt={selectedPackage.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-20 text-white">


            <p className="mt-6 uppercase tracking-[0.35em] text-[#D4A373] text-sm">
              TravelVista Package
            </p>

            <h1 className="mt-4 text-6xl lg:text-8xl font-bold">
              {selectedPackage.title}
            </h1>

            <p className="mt-4 text-xl text-white/80">
              {selectedPackage.location}
            </p>

            <p className="mt-8 max-w-3xl text-lg text-white/80 leading-relaxed">
              {selectedPackage.description}
            </p>

            <div className="flex flex-wrap gap-10 mt-10">
              <div>
                <h3 className="text-4xl font-bold">
                  {selectedPackage.price}
                </h3>
                <p className="text-white/70">
                  Starting Price
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">
                  {selectedPackage.duration}
                </h3>
                <p className="text-white/70">
                  Duration
                </p>
              </div>
            </div>

            <button
               onClick={() => navigate(`/booking/${selectedPackage.slug}`)}
               className="mt-10 rounded-full bg-white text-[#1E2A44] px-8 py-4 font-semibold hover:scale-105 transition"
            >
               Book Now
            </button>

          </div>
        </div>
      </section>

      {/* Stats Section */}

      <section className="py-20 px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-[24px] p-8 shadow-lg">
              <h3 className="text-4xl font-bold text-[#1E2A44]">
                4.9★
              </h3>

              <p className="text-gray-600 mt-2">
                Average Rating
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 shadow-lg">
              <h3 className="text-4xl font-bold text-[#1E2A44]">
                1200+
              </h3>

              <p className="text-gray-600 mt-2">
                Happy Travelers
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 shadow-lg">
              <h3 className="text-4xl font-bold text-[#1E2A44]">
                24/7
              </h3>

              <p className="text-gray-600 mt-2">
                Travel Support
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Highlights Section */}

      <section className="pb-24 px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-[#1E2A44] mb-12">
            Package Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {selectedPackage.highlights.map((item) => (
              <div
                key={item}
                className="bg-white/70 backdrop-blur-md p-8 rounded-[24px] shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#1E2A44]">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
    </PageTransition>
  );
}

export default PackageDetails;