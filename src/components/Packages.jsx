import baliPackage from "../assets/images/mascot/bali-package.png";
import parisPackage from "../assets/images/mascot/paris-package.png";
import maldivesPackage from "../assets/images/mascot/maldives-package.png";
import dubaiPackage from "../assets/images/mascot/dubai-package.png";
import santoriniPackage from "../assets/images/mascot/santorini-package.png";
import switzerlandPackage from "../assets/images/mascot/switzerland-package.png";
import kyotoPackage from "../assets/images/mascot/kyoto-package.png";
import icelandPackage from "../assets/images/mascot/iceland-package.png";
import baliHover from "../assets/videos/bali-hover.mp4";
import parisHover from "../assets/videos/paris-hover.mp4";
import maldivesHover from "../assets/videos/maldives-hover.mp4";
import dubaiHover from "../assets/videos/dubai-hover.mp4";
import santoriniHover from "../assets/videos/santorini-hover.mp4";
import switzerlandHover from "../assets/videos/switzerland-hover.mp4";
import kyotoHover from "../assets/videos/kyoto-hover.mp4";
import icelandHover from "../assets/videos/iceland-hover.mp4";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Packages() {

  const videoRefs = useRef({});

const packages = [
  {
    slug: "bali",
    title: "Bali Escape",
    duration: "5 Days / 4 Nights",
    price: "₹69,999",
    image: baliPackage,
    video: baliHover,
  },
  {
    slug: "paris",
    title: "Paris Romance",
    duration: "7 Days / 6 Nights",
    price: "₹89,999",
    image: parisPackage,
    video: parisHover,
  },
  {
    slug: "maldives",
    title: "Maldives Luxury",
    duration: "6 Days / 5 Nights",
    price: "₹99,999",
    image: maldivesPackage,
    video: maldivesHover,
  },
  {
  slug: "dubai",
  title: "Dubai Adventure",
  duration: "5 Days / 4 Nights",
  price: "₹79,999",
  image: dubaiPackage,
  video: dubaiHover,

},
{
  slug: "santorini",
  title: "Santorini Bliss",
  duration: "6 Days / 5 Nights",
  price: "₹1,09,999",
  image: santoriniPackage,
  video: santoriniHover,

},
{
  slug: "switzerland",
  title: "Swiss Alps Retreat",
  duration: "8 Days / 7 Nights",
  price: "₹1,29,999",
  image: switzerlandPackage,
  video: switzerlandHover,

},
{
  slug: "kyoto",
  title: "Kyoto Heritage Tour",
  duration: "6 Days / 5 Nights",
  price: "₹94,999",
  image: kyotoPackage,
  video: kyotoHover,

},
{
  slug: "iceland",
  title: "Iceland Northern Lights",
  duration: "7 Days / 6 Nights",
  price: "₹1,39,999",
  image: icelandPackage,
  video: icelandHover,
},
];

  return (
       <section
         id="packages"
         className="py-32 px-8 lg:px-20"
       >      
       
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
            Curated Experiences
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#1E2A44]">
            Travel Packages
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Handcrafted journeys designed for unforgettable adventures.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="flex gap-8 mt-16 overflow-x-auto pb-6 scrollbar-hide">          
          
          {packages.map((pkg, index) => (
            
            <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 60,scale: 0.95}}
                whileInView={{ opacity: 1, y: 0 , scale: 1}}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}

                onMouseEnter={() => {
                  if (videoRefs.current[pkg.slug]) {
                    videoRefs.current[pkg.slug].currentTime = 0;
                    videoRefs.current[pkg.slug].play();
                  }
                }}
             onMouseLeave={() => {
               if (videoRefs.current[pkg.slug]) {
                 videoRefs.current[pkg.slug].pause();
                 videoRefs.current[pkg.slug].currentTime = 0;
               }
             }}
                 className="group bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#D4A373]/20 transition-all duration-500 flex-shrink-0 w-[380px]"            
                 
              >
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                    pkg.video ? "group-hover:opacity-0" : ""
                  }`}
                />
              
                <video
                   ref={(el) => {
                     if (el) videoRefs.current[pkg.slug] = el;
                   }}
                   src={pkg.video}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
                  />
                
              
              </div>           

              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#1E2A44]">
                  {pkg.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {pkg.duration}
                </p>

                <div className="mt-6 flex justify-between items-center">
                <span className="text-2xl font-bold text-[#1E2A44] transition duration-300 group-hover:text-[#D4A373]">                   
                   {pkg.price}
                  </span>

               <Link
                  to={`/packages/${pkg.slug}`}
                  className="px-5 py-3 rounded-full bg-[#1E2A44] text-white transition-all duration-300 hover:scale-105 hover:bg-[#D4A373]"
               >
                Explore
               </Link>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;