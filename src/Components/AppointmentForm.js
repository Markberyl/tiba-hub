import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../Firebase/FirebaseInit";
import "../Styles/AppointmentForm.css";
import BaseLayout from "./BaseLayout";

function AppointmentForm() {
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [formErrors, setFormErrors] = useState({
    patientName: '',
    patientNumber: '',
    patientGender: '',
    appointmentTime: '',
    preferredMode: ''
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

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

    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (!user) {
      toast.error("You must be logged in to schedule an appointment.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        patientName,
        patientNumber,
        patientGender,
        appointmentTime,
        preferredMode,
        userId: user.uid,
        createdAt: new Date()
      });

      setPatientName("");
      setPatientNumber("");
      setPatientGender("default");
      setAppointmentTime("");
      setPreferredMode("default");
      setFormErrors({
        patientName: '',
        patientNumber: '',
        patientGender: '',
        appointmentTime: '',
        preferredMode: ''
      });

      toast.success("Appointment Scheduled!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to schedule appointment. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <BaseLayout>
      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Full Name:
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
    </BaseLayout>
  );
}

export default AppointmentForm;
