import React from 'react'

const Patients = (props) => {
    const { doctor, patients } = props

    const renderPatients = ()=> {
        return patients.map(patient => {
            return(
                <div>
                    <h1>{patient.name}</h1>
                    <a href={`/doctors/${doctor.id}/patients/${patient.id}`}>show</a>
                    <a href={`/doctors/${doctor.id}/patients/${patient.id}/edit`}>edit</a>
                    <a href={`/doctors/${doctor.id}/patients/${patient.id}`} data-method='delete'>delete</a>
                </div>
            )
        })
    }
    return(
        <div>
            <h1>Patients Page</h1>
            <p>Doctor is {doctor.name}</p>
            <p>Doctor id is {doctor.id}</p>
            <h1>patients</h1>
            <a href={`/doctors/${doctor.id}/patients/new`}>new patient</a>
            {renderPatients()}
        </div>
    )
}

export default Patients
