import React, { useState } from "react";
import Persons from "../Person/Persons";
import SimpleContext from "../../context/SimpleContext";
import NewPerson from "../Person/newPerson";
import Badge from '@material-ui/core/Badge';
import "./base.css";
const Base = () => {
    const [getPersons, setPersons] = useState([]);
    const [getSinglePerson, setSinglePerson] = useState("");
    const [getShowPersons, setShowPersons] = useState(true);

    const handleShowPerson = () => {
        setShowPersons(!getShowPersons);
    };

    const handleDeletePerson = id => {
        const persons = [...getPersons];
        const filteredPersons = persons.filter(p => p.id !== id); //! = =
        setPersons(filteredPersons);

        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex];
    };

    const handleNameChange = (event, id) => {
        const allPersons  = getPersons;

        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];

        persons[personIndex] = person;
        setPersons(persons);
    };

    const handleNewPerson = () => {
        const persons = [...getPersons];
        let list =[];
        let i;
        for(i>=0;i<100;i++){
            list=list[i]
        }
        const person = {
            id: list,
            fullname: getSinglePerson
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            setPersons(persons);
            setSinglePerson("");
        }
    };

    const setPerson = event => {
        setSinglePerson(event.target.value);
    };

    let person = null;

    if (getShowPersons) {
        person = <Persons />;
    }

    return (
        <SimpleContext.Provider
            value={{
                persons: getPersons,
                person: getSinglePerson,
                handleDeletePerson: handleDeletePerson,
                handleNameChange: handleNameChange,
                handleNewPerson: handleNewPerson,
                setPerson: setPerson
            }}
        >
            <div className="Base">
                <h4>مدیریت کننده اشخاص</h4>
                <p>
                    تعداد اشخاص{" "}
                    <Badge color="primary" badgeContent={getPersons.length}></Badge>{" "}
                نفر می باشد
                </p>
                <NewPerson />

                <button onClick={handleShowPerson}>
                    نمایش اشخاص
                </button>

                {person}
            </div>
        </SimpleContext.Provider>
    );
};

export default Base;