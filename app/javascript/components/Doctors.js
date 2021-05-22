import React from "react";

const Doctors = (props) => {
  const { doctors, patient } = props;

  // two returns in here
  const renderDoctors = () => {
    // this return returns the array at end of map
    return doctors.map((doctor) => {
      // this returns the jsx for each doctor
      return (
        <div>
          <h1>{doctor.name}</h1>
          <a href={`/doctors/${doctor.id}`}>show dr.</a>
          <a href={`/doctors/${doctor.id}/patients`}>show dr. and patients</a>
          <a href={`/doctors/${doctor.id}/edit`}>edit</a>
          <a href={`/doctors/${doctor.id}`} data-method="delete">
            delete
          </a>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Doctor here</h1>
      <a href="/doctors/new">new doctor</a>
      {renderDoctors()}
    </div>
  );
};
export default Doctors;
