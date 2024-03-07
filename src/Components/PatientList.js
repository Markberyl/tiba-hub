import React from 'react';

const PatientList = ({ patients }) => {
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