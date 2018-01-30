import React from 'react';
import ReactDOM from 'react-dom';

// Our programming pattern uses two React components: a stateful component, and a stateless component.
// "Stateful" describes any component that has a state property;
// "stateless" describes any component that does not.
// In our pattern, a stateful component passes its state down to a stateless component.

// Let's make a stateful component pass its state to a stateless component.
//
// To make that happen, you need two component classes: a stateful class, and a stateless class.

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Frarthur' };
    }

    render() {
        return <div></div>;
    }
}