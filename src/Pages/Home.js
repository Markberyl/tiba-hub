import React from "react";
import { Link } from "react-router-dom"; 
import Info from "../Components/Info";
import MedicalPortal from "../Components/MedicalPortal";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import BaseLayout from "../Components/BaseLayout";

function Home() {
  return (
    <BaseLayout>
      <MedicalPortal />
      <Info />
      <About />
      <Link to="/service">
        <button className="text-appointment-btn">Book Appointment</button>
      </Link>
      <Reviews />
    </BaseLayout>
  );
}

export default Home;
