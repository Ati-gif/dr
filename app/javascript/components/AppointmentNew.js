import React from "react";

const AppointmentNew = (props) => {
  const { patient } = props;

  return (
    <div>
      <h1>AppointmentNew page</h1>
      <p>Patient id for this appointment is {patient.id}</p>
      <form action={`/patients/${patient.id}/appointments`} method="post">
        <input placeholder="body" name="appointment[body]" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AppointmentNew;
