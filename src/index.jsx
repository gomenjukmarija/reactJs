// Our programming pattern uses two React components: a stateful component, and a stateless component.
// "Stateful" describes any component that has a state property;
// "stateless" describes any component that does not.

import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Frarthur'
        };
    }

    render() {
        return <div></div>;
    }
}

ReactDOM.render(<Parent />, document.getElementById('app'));