import travelVideo from "../assets/videos/travelvista-showcase.mp4";
import { motion } from "framer-motion";

function WhyTravelVista() {
  return (
    <section className="py-32 px-8 lg:px-20 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.3 }}
             transition={{ duration: 0.8 }}
             className="text-center"
           >          
           
          <p className="uppercase tracking-[0.35em] text-[#D4A373] text-sm">
            Why TravelVista
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#1E2A44]">
            Not Just Destinations.
            <br />
            Stories You'll Carry Forever.
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            From tropical beaches to alpine adventures,
            every journey is designed to create memories
            that stay with you long after the trip ends.
          </p>
          </motion.div>


        {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mt-16 relative overflow-hidden rounded-[40px] shadow-2xl"
          >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full object-cover"
          >
            <source
              src={travelVideo}
              type="video/mp4"
            />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          {/* Caption */}
          <div className="absolute bottom-8 left-8">
            <h3 className="text-white text-3xl md:text-5xl font-bold">
              One Traveler.
              <br />
              Endless Possibilities.
            </h3>
          </div>

        </motion.div>


        {/* Features */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.2 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="grid md:grid-cols-3 gap-8 mt-16"
           >
          {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-[32px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-transparent hover:border-[#D4A373]/30"
            >

            <div className="text-5xl mb-6">✨</div>

            <h3 className="text-2xl font-bold text-[#1E2A44]">
              Personalized Journeys
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Every itinerary is thoughtfully crafted around your travel style,
              interests, and dream destinations.
            </p>


          </motion.div>

          {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group bg-[#1E2A44] rounded-[32px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
            <div className="text-5xl mb-6">🌍</div>

            <h3 className="text-2xl font-bold text-white">
              Curated Experiences
            </h3>

            <p className="mt-4 text-white/80 leading-relaxed">
              Luxury stays, unforgettable activities,
              and handpicked destinations around the globe.
            </p>


          </motion.div>

          {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-white rounded-[32px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-transparent hover:border-[#D4A373]/30"
            >

            <div className="text-5xl mb-6">🤝</div>

            <h3 className="text-2xl font-bold text-[#1E2A44]">
              Seamless Planning
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From booking to return, our team manages every detail so you can
              focus entirely on the experience.
            </p>


          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default WhyTravelVista;