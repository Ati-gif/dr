import React from "react";

const DoctorEdit = (props) => {
  const { name, id } = props.doctor;
  return (
    <div>
      <h1>DoctorEdit component here</h1>
      <form action={`/doctors/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input defaultValue={name} placeholder="name" name="doctor[name]" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
export default DoctorEdit;
