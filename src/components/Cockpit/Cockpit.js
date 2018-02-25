import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    // dynamic classes
    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.cockpit}>
            <h1>Hi, I am REACT APP! </h1>
            <p className={assignedClasses.join(' ')}>Im Really Working.</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
      </button>
        </div>
    );

};

export default cockpit;