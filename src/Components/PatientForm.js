import React, { useState } from 'react';


function PatientForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age, gender, symptoms });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Symptoms:
        <textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PatientForm;