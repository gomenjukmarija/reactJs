import React from 'react';

// 4) The child receives the passed-down function, and uses it as an event handler.
// When a user clicks on the <button></button>,
// a click event will fire.
// This will make the passed-down function get called,
// which will update the parent's state.

export class ChildClass extends React.Component {
    render() {
        return (
            // The stateless component class uses
            // the passed-down handleClick function,
            // accessed here as this.props.onClick,
            // as an event handler:
            <button onClick={this.props.onClick}>
                Click Me!
            </button>
        );
    }
}