import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Appointment from "./Pages/Appointment";
import PatientList from "./Components/PatientList"; // Import PatientList component

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/patientlist" element={<PatientList />} /> {/* New route for PatientList */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

