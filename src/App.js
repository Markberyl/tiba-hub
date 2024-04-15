import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import Services from "./Pages/Services";
import PatientList from "./Pages/Patient"; // Import PatientList from "./Pages/Patient"
import Doctors from "./Components/Doctors"
import { app } from "./Firebase/FirebaseInit";
import { logEvent, getAnalytics } from "firebase/analytics";

function App() {
  const analytics = getAnalytics(app);
  useEffect(() => {
    // import { analytics } from "./Firebase/FirebaseInit";
    // Log page view event when the component mounts
    logEvent(analytics, {"page_view": { page_path: window.location.pathname }});
  }, []);

  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/Doctors" element={<Doctors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
