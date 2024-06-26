import React from "react";
import Doctor from "../Assets/Images group.jpg";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
      <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Tiba-hub, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards making healthcare available despite the distance.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        
      </div>
    </div>
  );
}

export default About;