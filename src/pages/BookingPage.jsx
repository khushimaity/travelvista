import { useParams } from "react-router-dom";
import { packages } from "../data/packages";
import { useState } from "react";
import PageTransition from "../components/PageTransition";

function BookingPage() {
  const { slug } = useParams();
  const [submitted, setSubmitted] = useState(false);

  const selectedPackage = packages.find(
  (pkg) => pkg.slug === slug
 );

  return (
      <PageTransition>
    <section className="min-h-screen bg-[#F8F9FA] pt-32 pb-20 px-8 lg:px-20">
      <div className="max-w-3xl mx-auto">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#D4A373] text-sm">
            TravelVista Booking
          </p>

          <h1 className="mt-4 text-5xl font-bold text-[#1E2A44]">
            Book Your Trip
          </h1>

          <p className="mt-4 text-gray-600">
            Complete the form below and our travel expert will contact you.
          </p>
        </div>

        <div className="mt-12 bg-white p-10 rounded-[32px] shadow-xl">

        {submitted && (
          <div className="mb-6 rounded-2xl bg-green-100 border border-green-300 p-5 text-green-800">
              Booking request submitted successfully! Our travel expert will contact you soon.
          </div>
        )}
        
        <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
           }}
        >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border"
            />

            <input
              type="text"
              value={selectedPackage?.title || slug}              readOnly
              className="w-full p-4 rounded-xl border bg-gray-100"
            />

            <input
              type="date"
              className="w-full p-4 rounded-xl border"
            />

            <input
              type="number"
              placeholder="Number of Travelers"
              className="w-full p-4 rounded-xl border"
            />

            <textarea
              rows="4"
              placeholder="Special Requests"
              className="w-full p-4 rounded-xl border"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#1E2A44] py-4 text-white font-semibold hover:scale-105 transition"
            >
              Submit Booking Request
            </button>

          </form>

        </div>
      </div>
    </section>
    </PageTransition>
  );
}

export default BookingPage;