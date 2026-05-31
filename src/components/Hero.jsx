import { motion } from "framer-motion";
import heroTraveler from "../assets/images/mascot/hero-traveler.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32">
      <div className="max-w-7xl mx-auto w-full px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#D4A373] mb-6">
              Premium Travel Experiences
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E2A44] leading-[1.1]"
            >
              Discover
              <br />
              Places That
              <br />
              Change You
            </motion.h1>

            <p className="mt-8 text-lg text-gray-600 max-w-lg">
              Curated journeys, unforgettable destinations, and experiences
              designed for modern explorers.
            </p>

            <button className="mt-8 px-8 py-4 rounded-full bg-[#1E2A44] text-white hover:scale-105 transition">
              Explore Destinations
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">
            <div className="relative">

              <motion.img
                src={heroTraveler}
                alt="TravelVista Explorer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-[420px] lg:w-[500px] rounded-[40px] shadow-2xl"
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 -left-6 bg-white px-4 py-2 rounded-2xl shadow-lg"
              >
                ✈ Bali
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-24 -right-6 bg-white px-4 py-2 rounded-2xl shadow-lg"
              >
                📍 Paris
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-12 -left-6 bg-white px-4 py-2 rounded-2xl shadow-lg"
              >
                🌴 Maldives
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;