import React from 'react';
import '../Styles/PatientList.css';

const PatientList = ({ patients }) => {
  
  if (!patients || patients.length === 0) {
    return <p>No patients to display</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Symptoms</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={index}>
            <td>{patient.name}</td>
            <td>{patient.age}</td>
            <td>{patient.gender}</td>
            <td>{patient.symptoms}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientList;
