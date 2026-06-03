import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-32 px-8 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-[#1E2A44] rounded-[40px] p-12 md:p-20 text-center"
        >
        <p className="uppercase tracking-[0.35em] text-[#D4A373] text-sm">
          Ready To Explore
        </p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mt-6"
          >       
             Your Next Adventure
          <br />
          Starts Today
        </motion.h2>

        <p className="text-white/80 max-w-2xl mx-auto mt-6 text-lg">
          Discover extraordinary destinations, unforgettable experiences,
          and journeys crafted just for you.
        </p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-white text-[#1E2A44] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
        >         
        
                Book Your Journey
         </motion.button>

      </motion.div>
    </section>
  );
}

export default CTA;