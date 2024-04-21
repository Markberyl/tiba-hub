import React from "react";
import { Link } from "react-router-dom"; 
import Info from "../Components/Info";
import MedicalPortal from "../Components/MedicalPortal";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import BaseLayout from "../Components/BaseLayout";


function Home() {
  return (
    <BaseLayout>
      <MedicalPortal />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
    </BaseLayout>
  );
}

export default Home;