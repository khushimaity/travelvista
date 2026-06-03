import PageTransition from "../components/PageTransition";

function DestinationsPage() {
  return (
  <PageTransition>
    <div className="min-h-screen px-8 lg:px-20 py-32">
      <h1 className="text-5xl font-bold text-[#1E2A44]">
        Destinations
      </h1>

      <p className="mt-4 text-gray-600">
        Explore all TravelVista destinations.
      </p>
    </div>
    </PageTransition>
  );
}

export default DestinationsPage;