import React, { useState } from 'react';
import PatientForm from './Components/PatientForm';
import PatientList from './Components/PatientList';
import AppointmentForm from './Components/AppointmentForm';
import Appointment from './Components/Appointment';

function App() {
  const [patients, setPatients] = useState([]);

  const handleSubmit = (patient) => {
    setPatients([...patients, patient]);
  };

  const handleEdit = (patientId, updatedPatient) => {
    setPatients(patients.map(patient => patient.id === patientId ? updatedPatient : patient));
  };

  const handleDelete = (patientId) => {
    setPatients(patients.filter(patient => patient.id !== patientId));
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tiba-Hub</h1>
      </header>
      <main className="App-main">
        <PatientForm onSubmit={handleSubmit} onError={handleError} />
        <PatientList patients={patients} onEdit={handleEdit} onDelete={handleDelete} onError={handleError} />
        <AppointmentForm component={Appointment} appointment={Appointment} onError={handleError} />
      </main>
    </div>
  );
}

export default App;
