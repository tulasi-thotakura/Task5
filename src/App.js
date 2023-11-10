import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageDifference = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed = today.getMonth() < birthDate.getMonth() || 
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
    const calculatedAge = isBirthdayPassed ? ageDifference : ageDifference - 1;
    setAge(calculatedAge);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label>
        Enter your date of birth<br></br><br></br>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label><br></br><br></br>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p><b>Your are {age-1} years old</b></p>}
    </div>
  );
}

export default App;