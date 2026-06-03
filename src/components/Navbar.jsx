import { Link, useLocation } from "react-router-dom";


function Navbar() {

  const location = useLocation();

  const isHomePage = location.pathname === "/";


  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/40 backdrop-blur-md px-6 py-4 shadow-lg">

          <h1 className="text-2xl font-bold text-[#1E2A44]">
            TravelVista
          </h1>

          {isHomePage ? (
          <ul className="hidden md:flex gap-8 text-[#1E2A44] font-medium">
        
            <li>
              <a href="#" className="hover:text-[#D4A373] transition">
                Home
              </a>
            </li>
        
            <li>
              <a href="#destinations" className="hover:text-[#D4A373] transition">
                Destinations
              </a>
            </li>
        
            <li>
              <a href="#packages" className="hover:text-[#D4A373] transition">
                Packages
              </a>
            </li>
        
            <li>
              <a href="#about" className="hover:text-[#D4A373] transition">
                About
              </a>
            </li>
        
            <li>
              <a href="#contact" className="hover:text-[#D4A373] transition">
                Contact
              </a>
            </li>
        
          </ul>
     ) : (
         <div className="hidden md:flex">
         <Link
            to="/"
            className="font-medium text-[#1E2A44] hover:text-[#D4A373] transition"
         >
               ← Back Home
         </Link>
         </div>
        )}

              {isHomePage && (
  <button
    onClick={() =>
      document
        .getElementById("packages")
        ?.scrollIntoView({
          behavior: "smooth",
        })
    }
    className="rounded-full bg-[#1E2A44] px-5 py-3 text-white transition hover:scale-105"
  >
    Book Now
  </button>
)}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;