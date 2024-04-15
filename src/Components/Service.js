import React, { useState, useEffect } from "react";
import { getAnalytics } from "firebase/analytics";
import "../Styles/Service.css";
import Bubbles from "../Components/Bubbles"; // Import Bubbles component
import heartCareImage from "../Assets/heartcare.jpg";
import consultationImage from "../Assets/consultation.jpg";
import dentalCareImage from "../Assets/dental care.jpg";
import pharmacyImage from "../Assets/PHARMACY.jpg";

function Service() {
  const [selectedService, setSelectedService] = useState(null);
  const analytics = getAnalytics();

  useEffect(() => {
    if (analytics) {
      analytics.logEvent("page_view", { page_name: "Services" });
    }
  }, [analytics]);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
    if (analytics) {
      analytics.logEvent("service_selection", { service_name: service });
    }
  };

  return (
    <div className="service-container">
      <Bubbles /> {/* Include the Bubbles component */}
      <h1 className="get-tiba-heading">Tiba-hub</h1>
      <h2>Available Services</h2>
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
        </div>
      )}
    </div>
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
      return ""; // Default image URL
  }
};

export default Service;
