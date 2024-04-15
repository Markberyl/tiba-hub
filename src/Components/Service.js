import React, { useState, } from "react";
import { getAnalytics } from "firebase/analytics";
import "../Styles/Service.css";
import Bubbles from "../Components/Bubbles"; // Import Bubbles component

function Service() {
  const [selectedService, setSelectedService] = useState(null);
  const analytics = getAnalytics();

  if((analytics) => {
    // Log page view event when the component mounts
    analytics.logEvent("page_view", { page_name: "Services" });
  // eslint-disable-next-line no-sequences
  }, [analytics]);

  const handleServiceSelection = (service) => {
    setSelectedService(service);

    // Log service selection event
    analytics.logEvent("service_selection", { service_name: service });
  };

  return (
    <div className="service-container">
      <Bubbles /> {/* Include the Bubbles component */}
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

const servicesData = ["Heart-care", "Consultation", "Dental-care" , "pharmacy"];

export default Service;
