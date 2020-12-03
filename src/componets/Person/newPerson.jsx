import React, { useContext } from "react";
import  SimpleContext  from '../../context/SimpleContext';
import AddIcon from '@material-ui/icons/Add';
import "./Person.css"
const NewPerson = () => {
    const context = useContext(SimpleContext);
    return (
        <div className="newPerson">
            <input
                type="text"
                placeholder=" شخص جدید"
                onChange={context.setPerson}
                value={context.person}
            />
            <button onClick={context.handleNewPerson}><AddIcon/></button>
        </div>
    );
};

export default NewPerson;
