import React from "react";

const DoctorNew = (props) => {
  return (
    <div>
      <h1>DoctorNew here</h1>
      <form action="/doctors" method="post">
        <input placeholder="name" name="doctor[name]" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
export default DoctorNew;
