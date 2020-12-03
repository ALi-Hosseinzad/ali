import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Person.css";
import PropTypes from 'prop-types';
const Person = ({ fullname, deleted, changed }) => {

    return (
        <div className="person">
            <p>{`${fullname}`}</p>
            <input
                        type="text"
                        className="form-control w-50"
                        placeholder={fullname}
                        onChange={changed}
                    />
            
            
            <button onClick={deleted}><DeleteIcon /></button>
        </div>
    );
};

Person.propTypes = {
    fullname :PropTypes.string,
    deleted :PropTypes.func,
    changed: PropTypes.func
};
export default Person;
