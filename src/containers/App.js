import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux';
import withClass from '../hoc/witchClass';

class App extends PureComponent {
  // state is only where class extends component

  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: '0', name: 'Andy', age: 25 },
        { id: '1', name: 'Manu', age: 28 },
        { id: '2', name: 'Gaby', age: 24 },
      ],
      otherState: 'Some other value',
      showPersons: false,
      toggleClicked: 0
    };

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  // shouldComponentUpdate(nextProps, nextState) {
  //commented because PureComponent
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
  }

  componentDidUpdate() {
    // called last
  }

  // arrow function
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = persons;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // Copye state
    persons.splice(personIndex, 1);
    this.setState({ persons: persons }); // state update
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
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
      <Aux>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>

        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>

    );
  }
}

export default withClass(App, classes.App);
