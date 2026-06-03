import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      review:
        "Our Bali honeymoon was absolutely perfect. Every detail was planned flawlessly and exceeded our expectations.",
    },
    {
      name: "James Wilson",
      location: "London, UK",
      review:
        "The Switzerland package exceeded all expectations. The hotels, scenery, and itinerary were incredible.",
    },
    {
      name: "Sarah Chen",
      location: "Singapore",
      review:
        "TravelVista made our Kyoto trip effortless. One of the best travel experiences we've ever had.",
    },
  ];

  return (
    <section className="py-32 px-8 lg:px-20 bg-gradient-to-b from-[#F8F9FA] to-white">
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
            Traveler Stories
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#1E2A44]">
            Loved By Explorers
            <br />
            Worldwide
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Thousands of travelers trust TravelVista to turn dream destinations
            into unforgettable memories.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
               className={`group rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-3
                 ${
                       index === 1
                          ? "bg-[#1E2A44] text-white shadow-2xl md:-mt-6 md:mb-6"
                          : "bg-white shadow-lg hover:shadow-2xl"
                
                }`} 
               >
              <div className="text-[#D4A373] text-2xl">
                ★★★★★
              </div>

               <p
                 className={`mt-6 leading-relaxed text-lg ${
                   index === 1 ? "text-white/80" : "text-gray-600"
                 }`}
               >                
               "{item.review}"
              </p>

              <div className="mt-8">
               <h3
                 className={`font-bold text-xl ${
                   index === 1 ? "text-white" : "text-[#1E2A44]"
                 }`}
               >            
                     {item.name}
                </h3>

              <p
                className={`${
                  index === 1 ? "text-white/60" : "text-gray-500"
                }`}
              >                 
               {item.location}
                </p>
              </div>

              <div className="mt-6 h-1 w-16 rounded-full bg-[#D4A373]"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;