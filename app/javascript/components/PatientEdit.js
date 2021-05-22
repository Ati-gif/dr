import React from 'react'
import Patient from './Patient'

const PatientEdit = (props) => {
    const { doctor } = props
    return(
        <div>
            <h1>PatientEdit Page</h1>
            <form action={`/doctors/${doctor.id}/patients/${patient.id}`} method='post'>
                <p>body</p>
                <input defaultValue={patient.body} name='patient[body]' />
                <p>name</p>
                <input defaultValue={patient.body} name='patient[body]' />
                <button type='doctormit'>add</button>
            </form>
        </div>
    )
}

export default PatientEdit
