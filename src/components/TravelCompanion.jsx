import { motion } from "framer-motion";
import travelCompanion from "../assets/images/mascot/travel-companion.png";

function TravelCompanion() {
  return (
    <section
      id="about"
      className="py-32 px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.img
              src={travelCompanion}
              alt="Travel Companion"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-[420px] rounded-[40px] shadow-2xl"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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

            <button
              onClick={() =>
                document
                  .getElementById("packages")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="mt-8 px-8 py-4 rounded-full bg-[#1E2A44] text-white hover:scale-105 transition"
            >
              Start Your Journey
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default TravelCompanion;