import React from "react";

const Patient = (props) => {
  const { doctor, patient } = props;
  return (
    <div>
      <h1>Patient Page</h1>
      <p>Doctor is {doctor.name}</p>
      <p>Doctor id is {doctor.id}</p>

      <h1>Patient Info</h1>
      <h1>{patient.name}</h1>
      <p>{patient.body}</p>

      <a href={`/patients/${patient.id}/appointments`}>
        view appointments page (ie index)
      </a>
    </div>
  );
};

export default Patient;
