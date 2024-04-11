import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/images 2.jpg";
import profile2 from "../Assets/images 1.jpg";
import profile3 from "../Assets/images 3.jpg";
import profile4 from "../Assets/images.jpg";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Tiba-hub. Trust in their
          knowledge and experience to assist you get better and live a more healthy life
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Wairimu Gacheri"
          title="General Surgeons"
          stars="4.9"
          reviews="32"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Mac Safrina"
          title="Hematologist"
          stars="4.8"
          reviews="70"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Jane Mtaita"
          title="Endocrinologist"
          stars="4.7"
          reviews="42"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Albert Odeng'"
          title="Hematologist"
          stars="4.8"
          reviews="50"
        />
      </div>
    </div>
  );
}

export default Doctors;