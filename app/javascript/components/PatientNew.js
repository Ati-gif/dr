import React from "react";

const PatientNew = (props) => {
  const { doctor } = props;
  return (
    <div>
      <h1>New patient for: {doctor.name}</h1>
      <form action={`/doctors/${doctor.id}/patients`} method="post">
        <p>body</p>
        <input name="patient[body]" />
        <p>name</p>
        <input name="patient[name]" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default PatientNew;
