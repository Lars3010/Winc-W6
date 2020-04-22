import React from 'react';
import Test from './components/test';

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            dentists: [
                {id: 1, firstName: 'Henk', lastName: 'Kies', tel: '0612345678', email: 'henk@tandartspraktijkbvt.nl', isSick: false},
                {id: 2, firstName: 'Piet', lastName: 'Trekker', tel: '0612965678', email: 'henk@tandartspraktijkbvt.nl', isSick: false},
                {id: 3, firstName: 'Ketti', lastName: 'Torel', tel: '0612545678', email: 'ketti@tandartspraktijkbvt.nl', isSick: false},
            ],
            assistents: [
                {id: 1, firstName: "Conrade", lastName: "Raisher", tel: "6999288055", email: "conrade@tandartspraktijkbvt.nl", isSick: false},
                {id: 2, firstName: "Sofia", lastName: "Kynan", tel: "2442701168", email: "sofia@tandartspraktijkbvt.nl", isSick: false},
                {id: 3, firstName: "Elihu", lastName: "Tassell", tel: "2849787819", email: "elihu@tandartspraktijkbvt.nl", isSick: false},
                {id: 4, firstName: "Irving", lastName: "Semper", tel: "1661078167", email: "irving@tandartspraktijkbvt.nl", isSick: true}
            ],
            patients: [
                {id: 1, firstName: "Cor", lastName: "Kyan", tel: "1661078167", email: "isemper3@nbcnews.com", birthYear: 1995, isSick: false},
                {id: 2, firstName: "Wim", lastName: "Whyberd", tel: "3445403487", email: "skynan1@bigcartel.com",birthYear: 2003, isSick: false},
                {id: 3, firstName: "Geertje", lastName: "Ginner", tel: "8082720226", email: "craisher0@ted.com",birthYear: 1965, isSick: false},
            ],
            appointments: [
                {id: 1, date: 2, time: 7, dentist: 1, assistent: 1, patient: 2, cancelled: false},
                {id: 2, date: 15, time: 13, dentist: 2, patient: 3, cancelled: false},
            ]
        }
    }

    addDentist = (firstName, lastName, tel, email) => {
        const newId = this.state.dentists.length + 1;
        const newDentist = {id: newId, firstName: firstName, lastName: lastName, tel: tel, email: email, isSick: false};
        this.setState(prevState => {
            return {
                dentists: [
                    ...prevState.dentists,
                    newDentist
                ]
            }
        });
    }
    
    addPatient = (firstName, lastName, tel, email, birthYear) => {
        const newId = this.state.patients.length + 1;
        const newPatient = {id: newId, firstName: firstName, lastName: lastName, tel: tel, email: email, birthYear: birthYear, isSick: false};
        this.setState(prevState => {
            return {
                patients: [
                    ...prevState.patients,
                    newPatient
                ]
            }
        });
    }

    makeDentistSick = (dentistID) => {
        const dentistState = [...this.state.dentists];
        const newDentistState = dentistState.map(item => {
            if(item.id === dentistID){
                return {...item, isSick: true}
            }
            return item;
        });
        this.setState({
            dentists: newDentistState
        })
    }

    render() {   
        return (
            <div>
                <Test addDentist={this.addDentist} addPatient={this.addPatient} makeDentistSick={this.makeDentistSick}/>
            </div>
        )
    }
}

export default Container;