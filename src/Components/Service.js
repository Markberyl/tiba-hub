import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import "../Styles/Service.css";
import Bubbles from "./Bubbles";

function Service() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="service-container">
      <Bubbles /> 
      <h1 className="get-tiba-heading">Tiba-hub</h1> 
      <h2>Available Services</h2>
      <div className="services-list">
        {servicesData.map((service) => (
          <div
            key={service}
            className={`service-item ${selectedService === service ? "selected" : ""}`}
            onClick={() => handleServiceSelection(service)}
          >
            {service}
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

const servicesData = ["Telemedicine", "Consultation", "Diagnosis"]; // Add more services as needed

export default Service;