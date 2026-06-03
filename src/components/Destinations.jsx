import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import baliDestinationVideo from "../assets/destination-videos/bali-destination.mp4";
import parisDestinationVideo from "../assets/destination-videos/paris-destination.mp4";
import maldivesDestinationVideo from "../assets/destination-videos/maldives-destination.mp4";
import dubaiDestinationVideo from "../assets/destination-videos/dubai-destination.mp4";
import santoriniDestinationVideo from "../assets/destination-videos/santorini-destination.mp4";
import switzerlandDestinationVideo from "../assets/destination-videos/switzerland-destination.mp4";
import kyotoDestinationVideo from "../assets/destination-videos/kyoto-destination.mp4";
import icelandDestinationVideo from "../assets/destination-videos/iceland-destination.mp4";

function Destinations() {
  const scrollRef = useRef(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const destinations = [
    {
      name: "Bali",
      price: "From ₹69,999",
      description:
        "Discover ancient temples, lush rice terraces, vibrant culture, and breathtaking sunsets.",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      video: baliDestinationVideo,

    },
    {
      name: "Paris",
      price: "From ₹89,999",
      description:
        "Experience charming streets, iconic landmarks, luxury shopping, and romantic evenings.",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114",
      video: parisDestinationVideo,

    },
    {
      name: "Maldives",
      price: "From ₹99,999",
      description:
        "Relax in overwater villas, crystal-clear lagoons, and private island luxury.",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      video: maldivesDestinationVideo,
    },
    {
      name: "Dubai",
      price: "From ₹79,999",
      description:
        "Explore futuristic skylines, luxury shopping, desert adventures, and world-class entertainment.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      video: dubaiDestinationVideo,
    },
    {
      name: "Santorini",
      price: "From ₹1,09,999",
      description:
        "Witness stunning sunsets, whitewashed villages, and unforgettable Mediterranean views.",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      video: santoriniDestinationVideo,
    },
    {
      name: "Switzerland",
      price: "From ₹1,29,999",
      description:
        "Experience majestic mountains, scenic train rides, and picturesque alpine villages.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      video: switzerlandDestinationVideo,
    },
    {
      name: "Kyoto",
      price: "From ₹94,999",
      description:
        "Explore ancient temples, traditional gardens, and authentic Japanese culture.",
      image:
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
      video: kyotoDestinationVideo,
    },
    {
      name: "Iceland",
      price: "From ₹1,39,999",
      description:
        "Discover glaciers, waterfalls, volcanoes, and the magical Northern Lights.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      video: icelandDestinationVideo,
    },
  ];

  return (
    <section
      id="destinations"
      className="py-28 px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >          
        <p className="uppercase tracking-[0.35em] text-[#D4A373] text-sm">
            Explore The World
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#1E2A44]">
            Popular Destinations
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking destinations carefully selected for unforgettable experiences.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl hover:scale-110 transition"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#1E2A44] text-white shadow-xl hover:scale-110 transition"
          >
            →
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide"
          >
          {destinations.map((destination, index) => (              
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.30,
              }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedDestination(destination)}
              className="group relative overflow-hidden rounded-[32px] shadow-xl cursor-pointer flex-shrink-0 w-[380px]"
            >
                
                <div className="relative h-[500px] w-full">
                
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                      destination.video ? "group-hover:opacity-0" : ""
                    }`}
                  />
                
                  {destination.video && (
                    <video
                      src={destination.video}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover opacity-0 scale-100 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"                    />
                  )}
                
                </div>

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
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="relative w-full max-w-7xl h-[85vh] rounded-[40px] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
           >               
              <motion.img
                 src={selectedDestination.image}
                 alt={selectedDestination.name}
                 initial={{ scale: 1 }}
                 animate={{ scale: 1.08 }}
                 transition={{
                       duration: 12,
                       repeat: Infinity,
                       repeatType: "reverse",
                     }}
                     className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

                
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-6 right-6 z-20 w-14 h-14 rounded-full bg-white/15 backdrop-blur-xl text-white text-2xl border border-white/20 hover:scale-110 transition"              >
                ×
              </button>

              <div className="absolute bottom-0 left-0 p-10 md:p-16 text-white max-w-3xl">
                <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md mb-5">
                  Premium Destination
                </span>

                <motion.h2
                     initial={{ y: 40, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.15 }}
                     className="text-6xl md:text-8xl font-bold"
                     >
                  {selectedDestination.name}
                </motion.h2>

                <p className="mt-4 text-xl text-white/90">
                  {selectedDestination.price}
                </p>

                <p className="mt-6 text-lg text-white/85 leading-relaxed">
                  {selectedDestination.description}
                </p>

                <button
                     onClick={() => {
                       setSelectedDestination(null);
                    
                       setTimeout(() => {
                         document
                           .getElementById("packages")
                           ?.scrollIntoView({
                             behavior: "smooth",
                           });
                       }, 300);
                     }}
                     className="mt-8 px-8 py-4 rounded-full bg-white text-[#1E2A44] font-semibold hover:scale-105 transition"
                    >
                     Explore Packages
                    </button>
                    
                    
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Destinations;