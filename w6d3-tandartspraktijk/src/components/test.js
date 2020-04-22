import React from 'react';

function Test(props){
    //const dentist = props.addDentist("new", "Dentist", "0614045110", "new@@tandartspraktijkbvt.nl");
    return(
        <div>
            <button onClick={() => props.addDentist("new", "Dentist", "0614045110", "new@@tandartspraktijkbvt.nl")}>Add Dentist</button>
            <button onClick={() => props.addPatient("new", "Patient", "0614045110", "new@@tandartspraktijkbvt.nl", 1997)}>Add Patient</button>
            <button onClick={() => props.makeDentistSick(2)}>Make dentist sick</button>
        </div>
    )
}

export default Test;