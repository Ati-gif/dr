import React from "react";

const Appointment = (props) => {
  const { patient, appointment } = props;

  return (
    <div>
      <h1>{appointment.body}</h1>
      <a href={`/patients/${patient.id}/appointments`}>go back</a>
      <a href={`/`}>home</a>
      <p>Patient id for this appointment is {patient.id}</p>
    </div>
  );
};

export default Appointment;
