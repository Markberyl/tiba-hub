import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Appointment from "./Components/Appointment";
import PatientList from "./Components/PatientList";
import Services from "./Components/Services"; // Import Services component

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/patientlist" element={<PatientList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
