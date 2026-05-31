function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/40 backdrop-blur-md px-6 py-4 shadow-lg">
          
          <h1 className="text-2xl font-bold text-[#1E2A44]">
            TravelVista
          </h1>

          <ul className="hidden md:flex gap-8 text-[#1E2A44] font-medium">
            <li className="cursor-pointer hover:text-[#D4A373] transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#D4A373] transition">
              Destinations
            </li>
            <li className="cursor-pointer hover:text-[#D4A373] transition">
              Packages
            </li>
            <li className="cursor-pointer hover:text-[#D4A373] transition">
              About
            </li>
            <li className="cursor-pointer hover:text-[#D4A373] transition">
              Contact
            </li>
          </ul>

          <button className="rounded-full bg-[#1E2A44] px-5 py-3 text-white transition hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;