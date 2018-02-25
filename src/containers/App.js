import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  // state is only where class extends component
  state = {
    persons: [
      { id: 'ded', name: 'Andy', age: 25 },
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
    const persons = [...this.state.persons]; // ES6 equiv to slice
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }


  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>

    );
  }
}

export default (App);
