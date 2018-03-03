
import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // lifecycles
    constructor(props) {
        super(props);
        console.log('constructor here');
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
    }

    componentDidUpdate() {
        // called last
    }
    // end life cycle 
    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                position={index}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                key={person.id}
            />

        });
    }
}
export default Persons;