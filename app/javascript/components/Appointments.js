import React from "react";

const Appointments = (props) => {
  const { patient, appointments } = props;

  const renderAppointments = () => {
    return appointments.map((appointment) => {
      return (
        <div>
          <p>{appointment.body}</p>
          <a href={`/patients/${patient.id}/appointments/${appointment.id}`}>
            show
          </a>
          <a
            href={`/patients/${patient.id}/appointments/${appointment.id}/edit`}
          >
            edit
          </a>
          <a
            href={`/patients/${patient.id}/appointments/${appointment.id}`}
            data-method="delete"
          >
            delete
          </a>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Appointments page</h1>
      <p>Patient id for this appointment is {patient.id}</p>
      <a href={`/patients/${patient.id}/appointments/new`}>new appointment</a>
      {renderAppointments()}
    </div>
  );
};

export default Appointments;
