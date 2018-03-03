import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/witchClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('I am not useless anymore.');
    }

    componentWillMount() {

    }

    componentDidMount() {
        // called last after render
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        return (
            <Aux >
                <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => { this.inputElement = inp }}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>

        )
    }
}

// Validating props --npm install proptypes
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

};

export default withClass(Person, classes.Person);