import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../Styles/AppointmentForm.css";

function AppointmentForm() {
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [symptoms, setSymptoms] = useState('');
  const [preferredMode, setPreferredMode] = useState("default");
  const [formErrors, setFormErrors] = useState({
    patientName: '',
    patientNumber: '',
    patientGender: '',
    appointmentTime: '',
    symptoms: '',
    preferredMode: ''
  });

  function handleSubmit(e) {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }

    if (!symptoms.trim()) {
      errors.symptoms = "Symptoms are required";
    }

    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setSymptoms("");
    setPreferredMode("default");
    setFormErrors({
      patientName: '',
      patientNumber: '',
      patientGender: '',
      appointmentTime: '',
      symptoms: '',
      preferredMode: ''
    });

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">Tiba - <span className="legal-siteSign">Hub</span></Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />

          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />

          <label>
            Patient Gender:
            <select value={patientGender} onChange={(e) => setPatientGender(e.target.value)}>
              <option value="default">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>

          <br />

          <label>
            Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <br />

          <label>
            Symptoms:
            <input
              type="text"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              required
            />
            {formErrors.symptoms && <p className="error-message">{formErrors.symptoms}</p>}
          </label>

          <br />

          <label>
            Preferred Mode:
            <select value={preferredMode} onChange={(e) => setPreferredMode(e.target.value)}>
              <option value="default">Select Mode</option>
              <option value="in-person">In Person</option>
              <option value="online">Online</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AppointmentForm;
