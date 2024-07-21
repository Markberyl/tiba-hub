import React, { useState, useEffect } from "react";
import { logEvent, getAnalytics } from "firebase/analytics";
import { Link } from "react-router-dom"; // Import Link component
import "../Styles/Service.css";
import Bubbles from "../Components/Bubbles"; // Import Bubbles component
import heartCareImage from "../Assets/heartcare.jpg";
import consultationImage from "../Assets/consultation.jpg";
import dentalCareImage from "../Assets/dental care.jpg";
import pharmacyImage from "../Assets/PHARMACY.jpg";
import BaseLayout from "./BaseLayout";

function Service() {
  const [selectedService, setSelectedService] = useState(null);
  const analytics = getAnalytics();

  useEffect(() => {
    logEvent(analytics, { "page_view": { page_path: window.location.pathname } });
  }, [analytics]);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
    logEvent(analytics, { "page_view": { page_path: window.location.pathname } });
  };

  return (
    <BaseLayout>
      <Bubbles /> {/* Include the Bubbles component */}
      <h1>Available Services</h1>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-item ${selectedService === service ? "selected" : ""}`}
            onClick={() => handleServiceSelection(service)}
          >
            <img src={getImageForService(service)} alt={service} className="service-image" />
            <p>{service}</p>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="selected-service">
          <h3>You have selected:</h3>
          <p>{selectedService}</p>
          <Link to="/appointment">
            <button className="text-appointment-btn">Book Appointment</button>
          </Link>
        </div>
      )}
    </BaseLayout>
  );
}

const servicesData = ["Heart-care", "Consultation", "Dental-care", "Pharmacy"];

const getImageForService = (service) => {
  switch (service) {
    case "Heart-care":
      return heartCareImage;
    case "Consultation":
      return consultationImage;
    case "Dental-care":
      return dentalCareImage;
    case "Pharmacy":
      return pharmacyImage;
    default:
      return "";
  }
};

export default Service;
