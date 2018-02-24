import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is only where class extends component
  state = {
    persons: [
      { id: 'ded', name: 'Andy', age: 28 },
      { id: 'fr', name: 'Manu', age: 28 },
      { id: 'dded', name: 'Gaby', age: 24 },
    ],
    otherState: 'Some other value',
    showPersons: false
  }


  // arrow function
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = persons;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [... this.state.persons]; // ES6 equiv to slice
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }


  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}

        </div>
      );
    btnClass = classes.Red;
    }
    // dynamic classes
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
 
      <div className={classes.App}>
        <h1>Hi, I am REACT APP! </h1>
        <p className={assignedClasses.join(' ')}>Im Really Working.</p>
        <button
        className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
          </button>
        {persons}
      </div>

    );
  }
}

export default (App);
