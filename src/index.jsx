import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './child.jsx';

// The stateless, child component will update the state of the parent component.

// 1) The parent component class defines a method that calls this.setState().
// For an example, look  at the .handleClick() method.

// 2) The parent component binds the newly-defined method to the current instance of the component in its constructor.
// This ensures that when we pass the method to the child component, it will still update the parent component.
//  For an example, look  at the end of the constructor() method this.handleClick = this.handleClick.bind(this)

// 3) Once the parent has defined a method that updates its state and bound to it,
// the parent then passes that method down to a child.//
// Look  at the prop <ChildClass onClick={this.handleClick} />


class ParentClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = { totalClicks: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const total = this.state.totalClicks;

        // calling handleClick will
        // result in a state change:
        this.setState(
            { totalClicks: total + 1 }
        );
    }

    // The stateful component class passes down
    // handleClick to a stateless component class:
    render() {
        return (
            <ChildClass onClick={this.handleClick} />
        );
    }
}