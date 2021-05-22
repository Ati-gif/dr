import React from "react";

const AppointmentEdit = (props) => {
  const { patient, appointment } = props;

  return (
    <div>
      <h1>AppointmentEdit page</h1>
      <p>Patient id for this appointment is {patient.id}</p>
      <form
        action={`/patients/${patient.id}/appointments/${appointment.id}`}
        method="post"
      >
        <input type="hidden" name="_method" value="patch" />
        <input
          placeholder="body"
          name="appointment[body]"
          defaultValue={appointment.body}
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default AppointmentEdit;
