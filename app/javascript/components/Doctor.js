import React from "react";

const Doctor = (props) => {
  const { id, name, created_at } = props.doctor;
  return (
    <>
      <h1>Doctor Component Here</h1>
      <h3>{name}</h3>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/">back</a>
    </>
  );
};

export default Doctor;
