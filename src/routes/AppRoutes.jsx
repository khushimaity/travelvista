import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import DestinationsPage from "../pages/DestinationsPage";
import PackageDetails from "../pages/PackageDetails";
import BookingPage from "../pages/BookingPage";

function AppRoutes() {
  const location = useLocation();

  return (
   <AnimatePresence mode="wait">
      <Routes
         location={location}
         key={location.pathname}
       >
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<DestinationsPage />} />
      <Route path="/packages/:slug" element={<PackageDetails />} />   
      <Route
       path="/booking/:slug"
       element={<BookingPage />}
      />
         </Routes>
         </AnimatePresence>
  );
}

export default AppRoutes;