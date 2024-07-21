import React from "react";
import { useNavigate } from "react-router-dom";
import Doctor from "../Assets/Images 4.jpg";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Tiba</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose Tiba-hub for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
