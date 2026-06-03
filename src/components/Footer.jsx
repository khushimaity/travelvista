function Footer() {
  return (
        <footer
          id="contact"
          className="px-8 lg:px-20 pb-10"
        >      <div className="max-w-7xl mx-auto border-t border-gray-300 pt-12">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-3xl font-bold text-[#1E2A44]">
              TravelVista
            </h3>

            <p className="mt-4 text-gray-600">
              Curated journeys, unforgettable destinations,
              and premium travel experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E2A44] mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#D4A373] transition cursor-pointer">
  About
              </li>
              
              <li className="hover:text-[#D4A373] transition cursor-pointer">
  Destinations
              </li>
              
              <li className="hover:text-[#D4A373] transition cursor-pointer">
  Packages
              </li>
              
              <li className="hover:text-[#D4A373] transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E2A44] mb-4">
              Support
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E2A44] mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li>hello@travelvista.com</li>
              <li>+91 98765 43210</li>
              <li>Available 24/7</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          © 2026 TravelVista. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;