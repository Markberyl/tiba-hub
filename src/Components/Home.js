import React from "react";
import Navbar from "./Navbar";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";
import Services from "./Services";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Info />
      <About />
      <BookAppointment />
      <Services/>
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;